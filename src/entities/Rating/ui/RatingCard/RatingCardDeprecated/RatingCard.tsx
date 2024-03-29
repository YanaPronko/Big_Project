import { memo, useCallback, useState } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useDeviceDetect } from "@/shared/lib/hooks/useDeviceDetect/useDeviceDetect";
import { BtnSize, Button } from "@/shared/ui/deprecated/Button";
import { Card } from "@/shared/ui/deprecated/Card";
import { Input } from "@/shared/ui/deprecated/Input";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Text } from "@/shared/ui/deprecated/Text";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { RatingCardProps } from "../../../model/types/rating";

import cls from "./RatingCard.module.scss";

export const RatingCardDeprecated = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    rate = 0,
    onCancel,
    onAccept,
  } = props;
  const { t } = useTranslation();
  const isMobile = useDeviceDetect();
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);

  const onSelectStars = useCallback(
    (selectedStarNumber: number) => {
      setStarsCount(selectedStarNumber);
      if (feedbackTitle) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarNumber);
      }
    },
    [feedbackTitle, onAccept],
  );

  const onAcceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, feedback, onAccept]);

  const onCanceltHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} size="xl" />
      <Input
        data-testid="RatingCard.Feedback"
        className={cls.inputSize}
        label={t("your-feedback")}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );
  return (
    <Card
      data-testid="RatingCard"
      className={classNames(cls.ratingCard, {}, [className])}
    >
      <VStack gap="8" align="center">
        <Text title={starsCount ? t("thank-you-for-feedback") : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      {!isMobile && (
        <Modal isOpen={isModalOpen}>
          <VStack max gap="32" align="start">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid="RatingCard.Cancel"
                theme="outline_red"
                onClick={onCanceltHandler}
              >
                {t("cancel-0")}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={onAcceptHandler}>
                {t("send")}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
      {isMobile && (
        <Drawer isOpen={isModalOpen} onClose={onCanceltHandler}>
          <VStack gap="32" align="stretch">
            {modalContent}
            <Button fullWidth onClick={onAcceptHandler} size={BtnSize.L}>
              {t("send")}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});
