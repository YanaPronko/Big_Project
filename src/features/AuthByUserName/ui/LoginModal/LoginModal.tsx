import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  ...otherProps
}) => (
  <Modal isOpen={isOpen} onClose={onClose} {...otherProps}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
