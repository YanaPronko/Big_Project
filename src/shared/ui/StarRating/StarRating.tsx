import { memo, useState } from 'react';

import cls from './StarRating.module.scss';

import { classNames } from '../../lib/classNames/classNames';
import { StarIcon } from '../Icons';

const stars = [1, 2, 3, 4, 5];

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starNumber: number) => void;
}

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className, size = 30, selectedStars = 0, onSelect,
  } = props;

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
