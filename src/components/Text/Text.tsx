import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'body' | 'subtitle' | 'caption';
}>`
  color: ${(props) => {
    if (props.disabled) return '#cccccc';
    if (props.color) return props.color;
    return '#333333';
  }};

  font-size: ${(props) => {
    if (props.fontSize) return props.fontSize;
    switch (props.variant) {
      case 'subtitle':
        return '1.25rem';
      case 'caption':
        return '0.875rem';
      default:
        return '1rem';
    }
  }};

  font-weight: ${(props) => props.fontWeight || '400'};
  text-align: ${(props) => props.textAlign || 'left'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  margin: 8px 0;
  line-height: 1.5;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${(props) => {
      if (props.fontSize) {
        const numSize = parseFloat(props.fontSize);
        return numSize * 0.9 + 'rem';
      }
      switch (props.variant) {
        case 'subtitle':
          return '1.1rem';
        case 'caption':
          return '0.8rem';
        default:
          return '0.9rem';
      }
    }};
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  color,
  fontSize,
  fontWeight,
  textAlign = 'left',
  variant = 'body',
}) => (
  <StyledText
    disabled={disabled}
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    textAlign={textAlign}
    variant={variant}
    data-testid="text"
  >
    {content}
  </StyledText>
);
