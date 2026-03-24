import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{
  height?: string;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '400px'};
  overflow: hidden;
  border-radius: 8px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: ${(props) => {
      const heightValue = props.height || '400px';
      const numHeight = parseFloat(heightValue);
      return numHeight * 0.7 + 'px';
    }};
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HeroOverlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.overlayColor || 'rgba(0, 0, 0, 0.4)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1.25rem;
  margin: 16px 0 0 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height = '400px',
  overlay = true,
  overlayColor,
  disabled = false,
  title,
  subtitle,
}) => (
  <HeroContainer height={height} disabled={disabled} data-testid="hero-image">
    <HeroImg src={src} alt={alt} data-testid="hero-image-img" />
    {overlay && (
      <HeroOverlay overlayColor={overlayColor} data-testid="hero-overlay">
        {title && <HeroTitle data-testid="hero-title">{title}</HeroTitle>}
        {subtitle && <HeroSubtitle data-testid="hero-subtitle">{subtitle}</HeroSubtitle>}
      </HeroOverlay>
    )}
  </HeroContainer>
);
