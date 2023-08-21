import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <Portal>
      <div className={classNames(cls.modal, {}, [className])} {...otherProps}>
        <div className={classNames(cls.overlay, {})}>
          <div className={classNames(cls.content)}>{t('lorem')}</div>
        </div>
      </div>
    </Portal>
  );
};
