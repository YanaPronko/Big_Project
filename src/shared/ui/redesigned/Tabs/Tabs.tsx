import { memo, ReactNode, useCallback } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { CardRedesigned } from "../Card/Card";
import { Flex, FlexDirection } from "../Stack/Flex/Flex";

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
   * @description direction of tabs (tow or collumn)
   *
   */
  direction?: FlexDirection;

  /**
   * @description Called when a tab is clicked
   * @param {TabItem} tab
   */
  onTabClick: (tab: TabItem) => void;
}

export const TabsRedesigned = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    direction = "row",
    selectedValue,
    onTabClick,
  } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      className={classNames(cls.tabs, {}, [className])}
      direction={direction}
      gap="8"
      max
      align="start"
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === selectedValue;

        return (<CardRedesigned
          key={tab.value}
          className={classNames(cls.tab, {
            [cls.selected]: isSelected,
          })}
          variant={isSelected ? "light" : "normal"}
          borderRadius="round"
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </CardRedesigned>);
      })}
    </Flex>
  );
});
