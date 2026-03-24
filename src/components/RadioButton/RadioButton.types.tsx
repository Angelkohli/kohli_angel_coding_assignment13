export interface RadioButtonProps {
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
