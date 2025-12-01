import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, MyButtonSize, MyButtonTheme } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
  }

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <MyButton
      className={classNames('', {}, [className])}
      theme={MyButtonTheme.OUTLINE}
      size={MyButtonSize.M}
      square={short}
      onClick={toggleLanguage}
    >
      {short
        ? t('Язык короткий')
        : t('Язык полный')}
    </MyButton>
  );
};
