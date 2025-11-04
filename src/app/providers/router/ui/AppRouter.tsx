import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('Загрузка')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
