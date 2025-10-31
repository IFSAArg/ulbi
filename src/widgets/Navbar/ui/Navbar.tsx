import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

  interface NavbarProps {
    className?: string;
  }

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        className={cls.aboutLink}
        to="/"
        theme={AppLinkTheme.PRIMARY}
      >
        About
      </AppLink>
      <AppLink
        to="/mainpage"
        theme={AppLinkTheme.PRIMARY}
      >
        MainPage
      </AppLink>
    </div>
  </div>
);
