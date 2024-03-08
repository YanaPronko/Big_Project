import { memo } from "react";

import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { MainLayout } from "../MainLayout/MainLayout";

import cls from "./AppLoaderLayout.module.scss";

export const AppLoaderLayout = memo(() => (
  <MainLayout
    header={
      <HStack className={cls.header}>
        <SkeletonRedesigned width={40} height={40} borderRadius="50%" />
      </HStack>
    }
    content={
      <VStack gap="16" className={cls.size}>
        <SkeletonRedesigned width="70%" height={32} borderRadius="16px" />
        <SkeletonRedesigned width="40%" height={20} borderRadius="16px" />
        <SkeletonRedesigned width="50%" height={20} borderRadius="16px" />
        <SkeletonRedesigned width="30%" height={32} borderRadius="16px" />
        <SkeletonRedesigned width="80%" height="40%" borderRadius="16px" />
        <SkeletonRedesigned width="80%" height="40%" borderRadius="16px" />
      </VStack>
    }
    sidebar={
      <SkeletonRedesigned borderRadius="32px" width={220} height="100%" />
    }
  />
));
