import { memo, useCallback, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUserName";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { NotificationButton } from "@/features/NotificationButton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";

import { NavBarProps } from "../../model/types/navbar";

import cls from "./NavBarRedesigned.module.scss";

export const NavbarRedesigned = memo((props: NavBarProps) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  useEffect(() => {
    if (authData) {
      setIsAuthModal(false);
    }
  }, [authData]);

  if (authData) {
    return (
      <header
        className={classNames(cls.navBar_redesigned, {}, [className])}
        {...otherProps}
      >
        <HStack gap="16" className={cls.logoBlock}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }
  return (
    <header className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <ButtonRedesigned
        className={cls.signinBtn}
        variant="filled"
        onClick={onShowModal}
        size="xl"
      >
        {t("sign-in")}
      </ButtonRedesigned>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </header>
  );
});
