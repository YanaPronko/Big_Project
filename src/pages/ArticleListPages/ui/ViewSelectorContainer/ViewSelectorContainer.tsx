import { ArticlesViewSelector } from "@/features/ArticlesViewSelector";
import { useArticleFilters } from "../../lib/hooks/useArticleFilters/useArticleFilters";
import { memo } from "react";

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props;
    const { view, onChangeView } = useArticleFilters();

    return (
      <ArticlesViewSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    );
  },
);
