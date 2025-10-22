import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

  interface SidebarProps {
    className?: string;
  }

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/*<LangSwitcher />*/}
      </div>
      <button onClick={toggleCollapse}>
        toggle
      </button>
    </div>
  )
}
