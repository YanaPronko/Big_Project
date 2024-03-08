import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/featureFlags";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Text } from "@/shared/ui/deprecated/Text";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import {
  useGetProfileRating,
  useProfileRate,
} from "../../api/profileRatingApi";

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation("profile");

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? "",
  });
  const [rateProfile, { error }] = useProfileRate();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateProfile({
        profileId,
        userId: userData?.id ?? "",
        rate: starsCount,
        feedback,
      });
    },
    [profileId, rateProfile, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const Skeleton = toggleFeatures({
    name: "isAppRedesigned",
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });


  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <TextRedesigned
            variant="error"
            text={t("oops-failed-rate-of-profile")}
            align="center"
            size="l"
          />
        }
        off={
          <Text
            theme="error"
            text={t("oops-failed-rate-of-profile")}
            align="center"
            size="l"
          />
        }
      />
    );
  }

  const rating = data?.[0]?.rate;
  return (
    <RatingCard
      className={className}
      title={t("rate-the-profile")}
      feedbackTitle={t("leave-your-feedback-about-this-profle")}
      rate={rating}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});

export default ProfileRating;
