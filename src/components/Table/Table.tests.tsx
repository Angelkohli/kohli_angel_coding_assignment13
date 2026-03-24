import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table, TableHeader, TableRow, TableCell, TableBody, TableFooter } from './Table';

describe('Table Components', () => {
  test('renders table and is visible', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow isHeader>
            <TableCell isHeader>Header</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const table = screen.getByTestId('table');
    expect(table).toBeVisible();
  });

  test('table changes opacity when disabled', () => {
    render(
      <Table disabled={true}>
        <TableHeader>
          <TableRow isHeader>
            <TableCell isHeader>Header</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const table = screen.getByTestId('table');
    expect(table).toHaveStyle('opacity: 0.6');
  });

  test('renders table header', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow isHeader>
            <TableCell isHeader>Name</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const header = screen.getByTestId('table-header');
    expect(header).toBeVisible();
  });

  test('renders table row', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const row = screen.getByTestId('table-row');
    expect(row).toBeVisible();
  });

  test('renders table cell', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = screen.getByTestId('table-cell');
    expect(cell).toBeVisible();
    expect(cell).toHaveTextContent('Data');
  });

  test('renders table footer', () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    const footer = screen.getByTestId('table-footer');
    expect(footer).toBeVisible();
  });

  test('row changes opacity when disabled', () => {
    render(
      <Table>
        <TableBody>
          <TableRow disabled={true}>
            <TableCell>Disabled Row</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const row = screen.getByTestId('table-row');
    expect(row).toHaveStyle('opacity: 0.6');
  });
});
