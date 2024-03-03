import { memo, useCallback, useState } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useDeviceDetect } from "@/shared/lib/hooks/useDeviceDetect/useDeviceDetect";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { InputRedesigned } from "@/shared/ui/redesigned/Input";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { StarRatingRedesigned } from "@/shared/ui/redesigned/StarRating";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { RatingCardProps } from "../../../model/types/rating";

import cls from "./RatingCard.module.scss";

export const RatingCardRedesigned = memo((props: RatingCardProps) => {
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
      <TextRedesigned title={feedbackTitle} size="xl" />
      <InputRedesigned
        data-testid="RatingCard.Feedback"
        className={cls.inputSize}
        label={t("your-feedback")}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );
  return (
    <CardRedesigned
      data-testid="RatingCard"
      className={classNames(cls.ratingCard, {}, [className])}
    >
      <VStack gap="8" align="center">
        <TextRedesigned
          title={starsCount ? t("thank-you-for-feedback") : title}
        />
        <StarRatingRedesigned
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
              <ButtonRedesigned
                data-testid="RatingCard.Cancel"
                variant="outline"
                onClick={onCanceltHandler}
              >
                {t("cancel-0")}
              </ButtonRedesigned>
              <ButtonRedesigned
                data-testid="RatingCard.Send"
                onClick={onAcceptHandler}
              >
                {t("send")}
              </ButtonRedesigned>
            </HStack>
          </VStack>
        </Modal>
      )}
      {isMobile && (
        <Drawer isOpen={isModalOpen} onClose={onCanceltHandler}>
          <VStack gap="32" align="stretch">
            {modalContent}
            <ButtonRedesigned fullWidth onClick={onAcceptHandler} size="l">
              {t("send")}
            </ButtonRedesigned>
          </VStack>
        </Drawer>
      )}
    </CardRedesigned>
  );
});
