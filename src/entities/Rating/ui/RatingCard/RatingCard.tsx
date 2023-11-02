import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { BtnSize, Button } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  rate?: number;
  onCancel?: (starNumber: number) => void;
  onAccept?: (starNumber: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, title, feedbackTitle, rate = 0, onCancel, onAccept,
  } = props;
  const { t } = useTranslation();
  const isMobile = useDeviceDetect();
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);

  const onSelectStars = useCallback((selectedStarNumber: number) => {
    setStarsCount(selectedStarNumber);
    if (feedbackTitle) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarNumber);
    }
  }, [feedbackTitle, onAccept]);

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
        className={cls.inputSize}
        label={t('your-feedback')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );
  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack gap="8" align="center">
        <Text title={starsCount ? t('thank-you-for-feedback') : title} />
        <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
      </VStack>
      {!isMobile && (
        <Modal isOpen={isModalOpen}>
          <VStack max gap="32" align="start">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                theme="outline_red"
                onClick={onCanceltHandler}
              >
                {t('cancel-0')}
              </Button>
              <Button
                onClick={onAcceptHandler}
              >
                {t('send')}
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
              {t('send')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});
