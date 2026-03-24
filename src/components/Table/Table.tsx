import styled from 'styled-components';
import {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean; striped?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledTHead = styled.thead<{ disabled?: boolean }>`
  background-color: #f8f9fa;
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
`;

const StyledTBody = styled.tbody``;

const StyledTFoot = styled.tfoot<{ disabled?: boolean }>`
  background-color: #f8f9fa;
  font-weight: 600;
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
`;

const StyledRow = styled.tr<{ disabled?: boolean; isHeader?: boolean }>`
  border-bottom: 1px solid #dee2e6;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? 'transparent' : '#f1f3f5')};
  }

  @media (max-width: 768px) {
    display: block;
    border: none;
    margin-bottom: 15px;
  }
`;

const StyledCell = styled.td<{
  disabled?: boolean;
  isHeader?: boolean;
  align?: 'left' | 'center' | 'right';
}>`
  padding: 12px 16px;
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
  word-wrap: break-word;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 6px;
      font-weight: bold;
      width: 45%;
      text-align: left;
      color: #666;
    }
  }
`;

const StyledHeader = styled.th<{ disabled?: boolean; align?: 'left' | 'center' | 'right' }>`
  padding: 12px 16px;
  text-align: ${(props) => props.align || 'left'};
  font-weight: 600;
  color: ${(props) => (props.disabled ? '#cccccc' : '#333333')};
  background-color: #e9ecef;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Table: React.FC<TableProps & { children: React.ReactNode }> = ({
  disabled = false,
  striped = false,
  children,
}) => (
  <StyledTable disabled={disabled} striped={striped} data-testid="table">
    {children}
  </StyledTable>
);

export const TableHeader: React.FC<TableHeaderProps & { children: React.ReactNode }> = ({
  disabled = false,
  children,
}) => (
  <StyledTHead disabled={disabled} data-testid="table-header">
    {children}
  </StyledTHead>
);

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledTBody data-testid="table-body">{children}</StyledTBody>
);

export const TableRow: React.FC<TableRowProps & { children: React.ReactNode }> = ({
  disabled = false,
  isHeader = false,
  children,
}) => (
  <StyledRow disabled={disabled} isHeader={isHeader} data-testid="table-row">
    {children}
  </StyledRow>
);

export const TableCell: React.FC<TableCellProps> = ({
  disabled = false,
  isHeader = false,
  align = 'left',
  children,
}) => {
  if (isHeader) {
    return (
      <StyledHeader disabled={disabled} align={align} data-testid="table-cell-header">
        {children}
      </StyledHeader>
    );
  }

  return (
    <StyledCell disabled={disabled} align={align} data-testid="table-cell">
      {children}
    </StyledCell>
  );
};

export const TableFooter: React.FC<TableFooterProps & { children: React.ReactNode }> = ({
  disabled = false,
  children,
}) => (
  <StyledTFoot disabled={disabled} data-testid="table-footer">
    {children}
  </StyledTFoot>
);
