import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
  argTypes: {
    disabled: { control: 'boolean' },
    striped: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const BasicTable = (args: any) => (
  <Table {...args}>
    <TableHeader>
      <TableRow isHeader>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Email</TableCell>
        <TableCell isHeader>Status</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Inactive</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell >Total Records: 3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default: Story = {
  render: (args) => <BasicTable {...args} />,
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <BasicTable {...args} />,
  args: {
    disabled: true,
  },
};