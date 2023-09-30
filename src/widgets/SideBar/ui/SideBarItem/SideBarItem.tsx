import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/types/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
  item: SideBarItemType,
  collappsed: boolean,
}

export const SideBarItem = memo(({ item, collappsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames('', { [cls.collappsed]: collappsed }, [])}
      to={item.path}
      theme="inverted"
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(`${item.text}`)}</span>
    </AppLink>
  );
});
