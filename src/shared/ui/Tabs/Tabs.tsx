import { memo, ReactNode, useCallback } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { Card } from "../Card/Card";

import cls from "./Tabs.module.scss";

export interface TabItem {
  /**
   * @description The value of Tab
   */
  value: string;
  /**
   * @description The content of Tab
   */
  content: ReactNode;
}

interface TabsProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description The tabs items to display
   */
  tabs: TabItem[];
  /**
   * @description The value of selected Tab
   */
  selectedValue: string;
  /**
   * @description Called when a tab is clicked
   * @param {TabItem} tab
   */
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, selectedValue, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === selectedValue ? "normal" : "outlined"}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
