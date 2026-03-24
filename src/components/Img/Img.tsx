import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  disabled?: boolean;
  borderRadius?: string;
}>`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: ${(props) => props.borderRadius || '0px'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover:not([disabled]) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    border-radius: ${(props) => {
      const radius = props.borderRadius || '0px';
      const numRadius = parseFloat(radius);
      return numRadius * 0.8 + 'px';
    }};
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  borderRadius = '0px',
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    borderRadius={borderRadius}
    data-testid="image"
  />
);
