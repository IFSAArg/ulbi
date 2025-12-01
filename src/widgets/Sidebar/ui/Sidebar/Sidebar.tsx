import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { MyButton, MyButtonSize, MyButtonTheme } from 'shared/ui/MyButton/MyButton';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutUsIcon from 'shared/assets/icons/aboutUs.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
  }

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('sidebar');

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <div className={cls.links}>
        <AppLink
          className={cls.link}
          to={RoutePath.about}
          theme={AppLinkTheme.PRIMARY}
        >
          <AboutUsIcon className={cls.icon} />
          <span className={cls.item}>
            {t('О нас')}
          </span>
        </AppLink>
        <AppLink
          className={cls.link}
          to={RoutePath.main}
          theme={AppLinkTheme.PRIMARY}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.item}>
            {t('Главная страница')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
      <MyButton
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
        className={cls.collapseBtn}
        theme={MyButtonTheme.BACKGROUND_INVERTED}
        size={MyButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </MyButton>
    </div>
  );
};
