import { FC, Suspense } from "react";

import { Loader } from "@/shared/ui/deprecated/Loader";
import { Modal } from "@/shared/ui/deprecated/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

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
