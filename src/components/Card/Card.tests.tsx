import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  const testProps = {
    title: 'Test Card',
    content: 'This is test content',
  };

  test('renders card and is visible', () => {
    render(<Card {...testProps} />);
    const card = screen.getByTestId('card');
    expect(card).toBeVisible();
  });

  test('changes opacity when disabled', () => {
    render(<Card {...testProps} disabled={true} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('opacity: 0.6');
  });
});