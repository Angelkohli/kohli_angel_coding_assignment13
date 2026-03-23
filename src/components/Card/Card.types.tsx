export interface CardProps {
  title: string;
  content: string;
  disabled?: boolean;
  imageUrl?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}