import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    htmlFor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};
