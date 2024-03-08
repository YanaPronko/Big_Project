import { memo } from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import {
  EditableProfileCard,
  profileReducer,
  fetchProfileData,
} from "@/features/EditableProfileCard";
import { ProfileRating } from "@/features/ProfileRating";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "@/shared/ui/deprecated/Text";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  useDynamicLoad(reducers, true);
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const { t } = useTranslation("profile");

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <TextRedesigned
            variant="error"
            text={t("such-profile-hasnt-been-found")}
            size="l"
            bold
          />
        }
        off={
          <Text
            theme="error"
            text={t("such-profile-hasnt-been-found")}
            size="l"
          />
        }
      />
    );
  }

  return (
    <Page data-testid="ProfilePage">
      <EditableProfileCard />
      <ProfileRating profileId={id} />
    </Page>
  );
});

export default ProfilePage;
