import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/about',
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
