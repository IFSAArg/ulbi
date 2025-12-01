import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Should render the Sidebar component', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapsed by Sidebar toggle button', () => {
    componentRender(<Sidebar />);
    const tglBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(tglBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
