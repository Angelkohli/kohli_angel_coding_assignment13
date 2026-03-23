export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}