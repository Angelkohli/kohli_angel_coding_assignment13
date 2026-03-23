import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label text="Test Label" />);
    const label = screen.getByText('Test Label');
    expect(label).toBeVisible();
  });

  test('changes color when disabled', () => {
    render(<Label text="Test Label" disabled={true} />);
    const label = screen.getByTestId('label');
    expect(label).toHaveStyle('color: #cccccc');
  });
});