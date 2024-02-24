import { memo } from "react";

import { useTranslation } from "react-i18next";

import { ArticleType } from "@/entities/Article";

import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types/order";
import { Card } from "@/shared/ui/deprecated/Card";
import { Input } from "@/shared/ui/deprecated/Input";

import cls from "./ArticlesFilters.module.scss";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticlesSortField } from "@/features/FiltersOfArticle";
import { ArticleSortSelector } from "@/features/FiltersOfArticle/ui/ArticleSortSelector/ArticleSortSelector";
import { ArticlesTypesTabs } from "@/features/FiltersOfArticle/ui/ArticlesTypesTabs/ArticlesTypesTabs";

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
  onChangeType: (type: ArticleType) => void;
}


export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation("article");

  return (
    <CardRedesigned
      className={classNames(cls.articlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          placeholder={t("search")}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesTypesTabs value={type} onChangeType={onChangeType} />
      </VStack>
    </CardRedesigned>
  );
});
