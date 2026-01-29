import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyModal } from 'shared/ui/MyModal/MyModal';
import { MyButton, MyButtonTheme } from 'shared/ui/MyButton/MyButton';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
  }

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <MyButton theme={MyButtonTheme.CLEAR} onClick={toggleAuthModal}>
          {t('Войти')}
        </MyButton>
      </div>
      <MyModal isOpen={isAuthModalOpen} onClose={toggleAuthModal}>
        {t('Lorem')}
      </MyModal>
    </div>
  );
};
