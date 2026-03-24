import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  const testImageUrl = 'https://via.placeholder.com/800x400?text=Hero+Image';

  test('renders hero image and is visible', () => {
    render(<HeroImage src={testImageUrl} alt="Test Hero" />);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toBeVisible();
  });

  test('applies opacity when disabled', () => {
    render(<HeroImage src={testImageUrl} alt="Test Hero" disabled={true} />);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toHaveStyle('opacity: 0.6');
  });
});
