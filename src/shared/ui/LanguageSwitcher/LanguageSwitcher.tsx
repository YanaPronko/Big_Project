import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className, short, ...otherProps } = props;

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.color_inverted, {}, [className])}
      theme="clear"
      onClick={toggleLang}
      {...otherProps}
    >
      {short ? t("ShortLng") : t("Language")}
    </Button>
  );
};
