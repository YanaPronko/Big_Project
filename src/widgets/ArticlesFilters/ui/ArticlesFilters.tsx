import { memo } from "react";

import { useTranslation } from "react-i18next";

import { ArticleType } from "@/entities/Article";
import {
  ArticlesSortField,
  ArticleSortSelectorRedesigned,
  ArticlesTypesTabs,
} from "@/features/FiltersOfArticle";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types/order";
import { Input } from "@/shared/ui/deprecated/Input";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { VStack } from "@/shared/ui/redesigned/Stack";

import cls from "./ArticleFilters.module.scss";

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
      <VStack gap="32" max align="start">
        <Input
          placeholder={t("search")}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleSortSelectorRedesigned
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
