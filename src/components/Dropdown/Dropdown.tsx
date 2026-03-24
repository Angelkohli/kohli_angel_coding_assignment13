import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { useState } from 'react';

const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

const DropdownSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#ffffff')};
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
  }

  &:focus:not(:disabled) {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`;

const DropdownOption = styled.option<{ disabled?: boolean }>`
  background-color: white;
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
  padding: 8px;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  placeholder = 'Select an option',
}) => {
  const [selected, setSelected] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelected(newValue);
    onChange?.(newValue);
  };

  return (
    <DropdownContainer>
      <DropdownSelect
        value={selected}
        onChange={handleChange}
        disabled={disabled}
        data-testid="dropdown"
      >
        <DropdownOption value="">{placeholder}</DropdownOption>
        {options.map((option) => (
          <DropdownOption key={option.value} value={option.value}>
            {option.label}
          </DropdownOption>
        ))}
      </DropdownSelect>
    </DropdownContainer>
  );
};
