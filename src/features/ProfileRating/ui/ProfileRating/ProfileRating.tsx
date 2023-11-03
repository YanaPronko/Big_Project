import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { useGetProfileRating, useProfileRate } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation('profile');

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });
  const [rateProfile, { error }] = useProfileRate();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateProfile({
        profileId,
        userId: userData?.id ?? '',
        rate: starsCount,
        feedback,
      });
    },
    [profileId, rateProfile, userData?.id],
  );

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  if (error) {
    return (
      <Text
        theme="error"
        text={t('oops-failed-rate-of-profile')}
        align="center"
        size="l"
      />
    );
  }

  const rating = data?.[0]?.rate;
  return (
    <RatingCard
      className={className}
      title={t('rate-the-profile')}
      feedbackTitle={t('leave-your-feedback-about-this-profle')}
      rate={rating}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});

export default ProfileRating;
