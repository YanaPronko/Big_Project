import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, ...otherProps }) => (
  <Modal isOpen={isOpen} onClose={onClose} {...otherProps}>
    <LoginForm />
  </Modal>
);
