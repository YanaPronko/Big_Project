import { memo } from "react";

import { ScrollToTopButton } from "@/features/ScrollToTopbutton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";

import cls from "./ScrollToolbar.module.scss";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className, ...otherProps } = props;

  return (
    <VStack
      justify="center"
      max
      className={classNames(cls.scrollToolbar, {}, [className])}
      {...otherProps}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
