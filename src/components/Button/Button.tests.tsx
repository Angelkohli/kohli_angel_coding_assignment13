import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button and is visible', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Button label="Test Button" disabled={true} />);
    const button = screen.getByTestId('button');
    expect(button).toHaveStyle('background-color: #cccccc');
  });
});