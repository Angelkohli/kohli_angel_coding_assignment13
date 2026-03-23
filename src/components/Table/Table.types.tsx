export interface TableProps {
  disabled?: boolean;
  striped?: boolean;
}

export interface TableHeaderProps {
  disabled?: boolean;
}

export interface TableRowProps {
  disabled?: boolean;
  isHeader?: boolean;
}

export interface TableCellProps {
  disabled?: boolean;
  isHeader?: boolean;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export interface TableFooterProps {
  disabled?: boolean;
}