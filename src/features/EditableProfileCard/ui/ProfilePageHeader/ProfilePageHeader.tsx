import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import cls from './ProfilePageHeader.module.scss';

import { getEditStatus } from '../../model/selectors/getEditStatus/getEditStatus';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');

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
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text className={cls.header} title={t('profile')} />

      {canEdit && (
        <div className={cls.headerBtn}>
          {readonly ? (
            <Button
              className={cls.editBtn}
              theme="outline"
              onClick={onEdit}
              data-testid="EditableProfileCard.EditBtn"
            >
              {t('edit')}
            </Button>
          ) : (
            <>
              <Button
                className={cls.editBtn}
                theme="outline"
                onClick={onCancelEdit}
                data-testid="EditableProfileCard.CancelBtn"
              >
                {t('cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                theme="outline_red"
                onClick={onSave}
                data-testid="EditableProfileCard.SaveBtn"
              >
                {t('save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
