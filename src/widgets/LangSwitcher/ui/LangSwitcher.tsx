import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"
import {MyButton, MyButtonTheme} from "shared/ui/MyButton/MyButton";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
  }

export const LangSwitcher = ({className}: LangSwitcherProps) => {

  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <MyButton
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={MyButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {t("Язык")}
    </MyButton>
  )
}
