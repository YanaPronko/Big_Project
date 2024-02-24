import { memo, useCallback, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUserName";
import { getRouteMain } from "@/shared/const/AppRoutes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { BtnSize, Button } from "@/shared/ui/deprecated/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";

import { NavBarDeprecated } from "./NavBarDeprecated/NavBarDeprecated";
import { NavbarRedesigned } from "./NavBarRedesigned/NavBarRedesigned";

import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
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
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<NavBarDeprecated />}
        on={<NavbarRedesigned />}
      />
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <HStack justify="center" className={cls.logoBlock}>
        <AppLink to={getRouteMain()} theme="inverted" size="xl">
          {t("pryweb")}
        </AppLink>
      </HStack>
      <Button
        className={cls.signinBtn}
        theme="clear_inverted"
        onClick={onShowModal}
        size={BtnSize.L}
      >
        {t("sign-in")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </header>
  );
});
