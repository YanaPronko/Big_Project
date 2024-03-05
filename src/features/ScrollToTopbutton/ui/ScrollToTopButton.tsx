import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { ScrollToTopIcon } from "@/shared/ui/redesigned/Icons";


interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className, ...otherProps } = props;

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <ButtonRedesigned
      className={classNames('', {}, [className])}
      variant="clear"
      onClick={clickHandler}
      {...otherProps}
    >
      <ScrollToTopIcon />
    </ButtonRedesigned>
  );
});
