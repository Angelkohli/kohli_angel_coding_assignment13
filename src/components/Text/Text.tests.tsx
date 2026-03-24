import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text content="Test Text" />);
    const text = screen.getByText('Test Text');
    expect(text).toBeVisible();
  });

  test('changes color when disabled', () => {
    render(<Text content="Test Text" disabled={true} />);
    const text = screen.getByTestId('text');
    expect(text).toHaveStyle('color: #cccccc');
  });
});
