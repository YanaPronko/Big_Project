import { useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { getEditStatus } from "../../../model/selectors/getEditStatus/getEditStatus";
import { getProfileReadonly } from "../../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../../model/slice/profileSlice";
import { ProfilePageHeaderProps } from "../../../model/types/profileSchema";

import cls from "./ProfilePageHeader.module.scss";

export const ProfilePageHeaderRedesigned = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const canEdit = useSelector(getEditStatus);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <CardRedesigned
      padding="24"
      className={classNames(cls.profilePageHeader, {}, [className])}
    >
      <HStack max justify="between">
        <TextRedesigned className={cls.header} title={t("profile")} />

        {canEdit && (
          <div className={cls.headerBtn}>
            {readonly ? (
              <ButtonRedesigned
                className={cls.editBtn}
                variant="outline"
                onClick={onEdit}
                data-testid="EditableProfileCard.EditBtn"
              >
                {t("edit")}
              </ButtonRedesigned>
            ) : (
              <>
                <ButtonRedesigned
                  className={cls.editBtn}
                  onClick={onCancelEdit}
                  color="error"
                  data-testid="EditableProfileCard.CancelBtn"
                >
                  {t("cancel")}
                </ButtonRedesigned>
                <ButtonRedesigned
                  className={cls.saveBtn}
                  color="success"
                  onClick={onSave}
                  data-testid="EditableProfileCard.SaveBtn"
                >
                  {t("save")}
                </ButtonRedesigned>
              </>
            )}
          </div>
        )}
      </HStack>
    </CardRedesigned>
  );
};
