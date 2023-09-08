import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
  item: SideBarItemType,
  collappsed: boolean,
}

export const SideBarItem = memo(({ item, collappsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      className={classNames('', { [cls.collappsed]: collappsed }, [])}
      to={item.path}
      theme="inverted"
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
