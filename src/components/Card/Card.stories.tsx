import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a basic card component with title and content.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and cannot be interacted with.',
    disabled: true,
  },
};
