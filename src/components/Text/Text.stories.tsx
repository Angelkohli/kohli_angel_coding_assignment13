import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    textAlign: { control: 'select', options: ['left', 'center', 'right'] },
    variant: { control: 'select', options: ['body', 'subtitle', 'caption'] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is a default text component.',
    disabled: false,
    variant: 'body',
  },
};

export const Disabled: Story = {
  args: {
    content: 'This is disabled text.',
    disabled: true,
  },
};