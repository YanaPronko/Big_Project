import { memo, useMemo } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types/order";
import { SelectOption } from "@/shared/ui/deprecated/Select";
import { ListBoxRedesigned } from "@/shared/ui/redesigned/Popups";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { ArticlesSortField } from "../../../model/types/articlesFiltersSchema";

import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticlesSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortSelectorRedesigned = memo(
  (props: ArticleSortSelectorProps) => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation("article");

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        { value: "asc", content: `${t("ascending")}` },
        { value: "desc", content: `${t("descending")}` },
      ],
      [t],
    );

    const sortOptions = useMemo<SelectOption<ArticlesSortField>[]>(
      () => [
        { value: "title", content: `${t('title')}` },
        { value: "createdAt", content: `${t("creation date")}` },
        { value: "views", content: `${t("number-of-views")}` },
      ],
      [t],
    );

    return (
      <div
        className={classNames(cls.articleSortSelectorRedesigned, {}, [
          className,
        ])}
      >
        <VStack gap="16" max align="start">
          <TextRedesigned text={t("sort-by")} />
          <ListBoxRedesigned
            key={nanoid()}
            items={orderOptions}
            selectedVal={order}
            onChange={onChangeOrder}
          />
          <ListBoxRedesigned
            key={nanoid()}
            items={sortOptions}
            selectedVal={sort}
            onChange={onChangeSort}
          />
        </VStack>
      </div>
    );
  },
);
