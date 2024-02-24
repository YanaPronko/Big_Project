import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLogoIcon } from "../Icons/ui/AppLogoIcon/AppLogoIcon";
import { HStack } from "../Stack";

import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
  <HStack
    max
    justify="center"
    className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppLogoIcon />
  </HStack>
));
