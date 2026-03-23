import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img Component', () => {
  const testImageUrl = 'https://via.placeholder.com/150';

  test('renders image and is visible', () => {
    render(<Img src={testImageUrl} alt="Test Image" />);
    const image = screen.getByTestId('image');
    expect(image).toBeVisible();
  });

  test('applies opacity when disabled', () => {
    render(<Img src={testImageUrl} alt="Test Image" disabled={true} />);
    const image = screen.getByTestId('image');
    expect(image).toHaveStyle('opacity: 0.6');
  });
});