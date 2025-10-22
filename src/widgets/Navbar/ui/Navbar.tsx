import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

  interface NavbarProps {
    className?: string;
  }

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.aboutLink}
          to={"/"}
          theme={AppLinkTheme.PRIMARY}
        >
          About
        </AppLink>
        <AppLink 
          to={"/mainpage"} 
          theme={AppLinkTheme.PRIMARY}
        >
          MainPage
        </AppLink>
      </div>
    </div>
  )
}

