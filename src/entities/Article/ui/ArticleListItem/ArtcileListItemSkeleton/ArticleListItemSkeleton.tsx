import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/featureFlags";
import { Card } from "@/shared/ui/deprecated/Card";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";

import { ArticleListItemSkeletonProps } from "../../../model/types/articleListItem";

import cls from "./ArticleListItem.module.scss";

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: "isAppRedesigned",
      on: () => cls.articleListItemRedesigned,
      off: () => cls.articleListItem,
    });

    const Skeleton = toggleFeatures({
      name: "isAppRedesigned",
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (view === "list") {
      return (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
              <CardRedesigned className={cls.card} max padding="24">
                <div className={cls.header}>
                  <Skeleton borderRadius="50%" height={30} width={30} />
                  <Skeleton width={150} height={16} className={cls.username} />
                  <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                  <Skeleton height={36} width={200} className={cls.btn} />
                </div>
              </CardRedesigned>
            </div>
          }
          off={
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
              <Card className={cls.card} max>
                <div className={cls.header}>
                  <Skeleton borderRadius="50%" height={30} width={30} />
                  <Skeleton width={150} height={16} className={cls.username} />
                  <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                  <Skeleton height={36} width={200} className={cls.btn} />
                </div>
              </Card>
            </div>
          }
        />
      );
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <CardRedesigned className={cls.card} borderRadius="round" padding="0">
              <div className={cls.imageWrapper}>
                <Skeleton width="100%" className={cls.img} />
              </div>
              <div className={cls.infoWrapper}>
                <Skeleton width="100%" />
              </div>
              <Skeleton width="100%" height={16} className={cls.title} />
            </CardRedesigned>
          </div>
        }
        off={
          <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card className={cls.card}>
              <div className={cls.imageWrapper}>
                <Skeleton width="100%" className={cls.img} />
              </div>
              <div className={cls.infoWrapper}>
                <Skeleton width="100%" />
              </div>
              <Skeleton width="100%" height={16} className={cls.title} />
            </Card>
          </div>
        }
      />
    );
  },
);
