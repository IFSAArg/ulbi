import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
      <Counter />
    </div>
  );
};

export default MainPage;
