import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/Loader";
import { HStack } from "@/shared/ui/Stack";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className, ...otherProps } = props;

  return (
    <HStack
      justify="center"
      className={classNames(cls.pageLoader, {}, [className])}
      {...otherProps}
    >
      <Loader />
    </HStack>
  );
});
