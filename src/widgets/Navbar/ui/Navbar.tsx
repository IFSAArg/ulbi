import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

  interface NavbarProps {
    className?: string;
  }

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.aboutLink}
          to="/"
          theme={AppLinkTheme.PRIMARY}
        >
          {t('О нас')}
        </AppLink>
        <AppLink
          to="/mainpage"
          theme={AppLinkTheme.PRIMARY}
        >
          {t('Главная страница')}
        </AppLink>
      </div>
    </div>
  );
};
