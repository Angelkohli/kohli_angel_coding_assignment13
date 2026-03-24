import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}>`
  background-color: ${(props) => {
    if (props.disabled) return '#cccccc';
    if (props.backgroundColor) return props.backgroundColor;
    return props.variant === 'secondary' ? '#6c757d' : '#007bff';
  }};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-weight: 600;
  transition: all 0.3s ease;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return 'padding: 6px 12px; font-size: 0.875rem;';
      case 'large':
        return 'padding: 12px 24px; font-size: 1.125rem;';
      default:
        return 'padding: 10px 20px; font-size: 1rem;';
    }
  }}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.size === 'small' ? '5px 10px' : props.size === 'large' ? '10px 20px' : '8px 16px'};
    font-size: ${(props) =>
      props.size === 'small' ? '0.8rem' : props.size === 'large' ? '1rem' : '0.9rem'};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor,
  onClick,
  size = 'medium',
  variant = 'primary',
}) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    backgroundColor={backgroundColor}
    size={size}
    variant={variant}
    data-testid="button"
  >
    {label}
  </StyledButton>
);
