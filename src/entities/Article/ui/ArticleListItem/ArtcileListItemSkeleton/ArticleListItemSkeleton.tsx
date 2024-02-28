import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated} from "@/shared/ui/deprecated/Card";
import { Skeleton as SkeletonDeprecated} from "@/shared/ui/deprecated/Skeleton";

import { ArticleView } from "../../../model/types/article";

import cls from "./ArticleListItem.module.scss";
import { toggleFeatures } from "@/shared/lib/featureFlags";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { ArticleListItemSkeletonProps } from "../../../model/types/articleListItem";



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

    const Card = toggleFeatures({
      name: "isAppRedesigned",
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === "list") {
      return (
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
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    );
  },
);
