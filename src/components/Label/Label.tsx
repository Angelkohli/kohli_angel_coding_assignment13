import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  disabled?: boolean;
  color?: string;
  fontSize?: string;
}>`
  color: ${(props) => {
    if (props.disabled) return '#cccccc';
    if (props.color) return props.color;
    return '#333333';
  }};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${(props) => {
      const size = props.fontSize || '1rem';
      const numSize = parseFloat(size);
      return numSize * 0.9 + 'rem';
    }};
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  htmlFor,
  required = false,
  color,
  fontSize,
}) => (
  <StyledLabel
    htmlFor={htmlFor}
    disabled={disabled}
    color={color}
    fontSize={fontSize}
    data-testid="label"
  >
    {text}
    {required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
  </StyledLabel>
);
