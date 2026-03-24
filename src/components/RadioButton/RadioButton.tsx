import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioButtonContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  margin: 8px 0;
  user-select: none;
  transition: all 0.3s ease;
`;

const HiddenInput = styled.input`
  display: none;
`;

const RadioCircle = styled.div<{ disabled?: boolean; checked?: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => (props.disabled ? '#cccccc' : '#007bff')};
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.checked && !props.disabled ? '#007bff' : 'white')};

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange?.(value);
    }
  };

  return (
    <RadioButtonContainer disabled={disabled} data-testid="radio-button-label">
      <HiddenInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        data-testid="radio-button-input"
      />
      <RadioCircle disabled={disabled} checked={checked} data-testid="radio-circle" />
      {label && <RadioLabel disabled={disabled}>{label}</RadioLabel>}
    </RadioButtonContainer>
  );
};
