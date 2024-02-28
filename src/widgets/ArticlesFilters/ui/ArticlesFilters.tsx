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
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { SearchIconRedesigned } from "@/shared/ui/redesigned/Icons";
import { InputRedesigned } from "@/shared/ui/redesigned/Input";
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
        <InputRedesigned
          placeholder={t("search")}
          value={search}
          onChange={onChangeSearch}
          addonLeft={<SearchIconRedesigned />}
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
