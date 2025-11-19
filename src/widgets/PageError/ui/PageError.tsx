import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import cls from './PageError.module.scss';

  interface PageErrorProps {
    className?: string;
  }

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Ой! Кажется всё сломалось((')}
      <button type="button" onClick={reloadPage}>
        {t('Перезагрузить страницу')}
      </button>
    </div>
  );
};
