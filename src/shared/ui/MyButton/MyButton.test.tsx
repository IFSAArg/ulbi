import { render, screen } from '@testing-library/react';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { MyButtonTheme } from './MyButton';

describe('MyButton', () => {
  test('Test to appear in document', () => {
    render(<MyButton theme={MyButtonTheme.CLEAR}>TEST</MyButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Test clear theme', () => {
    render(<MyButton theme={MyButtonTheme.CLEAR}>TEST</MyButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
