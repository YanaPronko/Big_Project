import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/deprecated/Loader";

import cls from "./ProfileCard.module.scss";

interface ProfileCardSkeletonDeprecatedProps {
  className?: string;
}

export const ProfileCardSkeletonDeprecated = memo(
  (props: ProfileCardSkeletonDeprecatedProps) => {
    const { className, ...otherProps } = props;

    return (
      <div
        className={classNames(cls.profileCard, {}, [className])}
        {...otherProps}
      >
        <Loader />
      </div>
    );
  },
);
