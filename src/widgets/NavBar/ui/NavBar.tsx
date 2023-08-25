import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <Button
        className={cls.signinBtn}
        theme="clear_inverted"
        onClick={onShowModal}
      >
        {t('sign-in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {t('lorem')}
      </Modal>
    </div>
  );
};
