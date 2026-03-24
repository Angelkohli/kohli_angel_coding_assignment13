export interface TextProps {
  content: string;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'body' | 'subtitle' | 'caption';
}
