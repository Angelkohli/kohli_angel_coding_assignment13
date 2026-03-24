import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown',
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

export const Default: Story = {
  args: {
    options,
    disabled: false,
    placeholder: 'Select a fruit',
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    placeholder: 'Select a fruit',
  },
};
