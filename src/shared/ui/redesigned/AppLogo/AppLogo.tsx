import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import logo from "../../../assets/PrywebLogobyDesigner.png";
import { HStack } from "../Stack";

import cls from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
  <HStack
    max
    justify="center"
    className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <img src={logo} alt="app logo" className={cls.logo} />
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
  </HStack>
));
