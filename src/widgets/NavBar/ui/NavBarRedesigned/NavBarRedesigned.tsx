import { memo } from "react";

import { AvatarDropdown } from "@/features/AvatarDropdown";
import { NotificationButton } from "@/features/NotificationButton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/Stack";

import cls from "./NavBarRedesigned.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavbarRedesigned = memo((props: NavBarProps) => {
  const { className, ...otherProps } = props;
  return (
    <header
      className={classNames(cls.navBar_redesigned, {}, [className])}
      {...otherProps}
    >
      <HStack gap="16">
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
    </header>
  );
});
