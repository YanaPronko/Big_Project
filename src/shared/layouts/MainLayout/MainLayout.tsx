import { ReactElement } from "react";

// eslint-disable-next-line path-checker-pryweb/layers-import
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";

import { classNames } from "../../lib/classNames/classNames";

import cls from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  header?: ReactElement;
  sidebar: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, header, sidebar, toolbar, content, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.mainLayout, {}, [className])}
      {...otherProps}
    >
      <div className={classNames(cls.sidebar, {}, [className])}>{sidebar}</div>
      <ErrorBoundary>
        <div className={classNames(cls.content, {}, [className])}>
          {content}
        </div>
      </ErrorBoundary>
      <div className={classNames(cls.rightbar, {}, [className])}>
        <div className={classNames(cls.header, {}, [className])}>{header}</div>
        <div className={classNames(cls.toolbar, {}, [className])}>
          {toolbar}
        </div>
      </div>
    </div>
  );
};
