import { memo } from "react";

import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

export const ProfileCardSkeletonRedesigned = memo(() => (
  <CardRedesigned padding="24" max>
    <VStack gap="32">
      <HStack max justify="center">
        <SkeletonRedesigned borderRadius="100%" width={128} height={128} />
      </HStack>
      <HStack gap="32" max>
        <VStack gap="16" max>
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
        </VStack>

        <VStack gap="16" max>
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
          <SkeletonRedesigned width="100%" height={38} />
        </VStack>
      </HStack>
    </VStack>
  </CardRedesigned>
));
