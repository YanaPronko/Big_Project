import { memo, useState } from "react";

import { classNames } from "../../../lib/classNames/classNames";
import { StarIcon } from "../Icons";

import cls from "./StarRating.module.scss";

const stars = [1, 2, 3, 4, 5];

interface StarRatingProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Height and width of the star
   * @default 30
   */
  size?: number;
  /**
   * @description 0 means no stars are selected
   * @default 0
   */
  selectedStars?: number;
  /**
   * @description Called when a star is selected
   * @param {number} starsCount
   */
  onSelect?: (starNumber: number) => void;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;

  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starNumber);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      onSelect?.(starNumber);
      setCurrentStarCount(starNumber);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber) => (
        <StarIcon
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            className,
            currentStarCount >= starNumber ? cls.hovered : cls.normal,
          ])}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarCount >= starNumber}
          width={size}
          height={size}
          key={starNumber}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
