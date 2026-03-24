import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Components/RadioButton',
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'option',
    value: 'option1',
    label: 'Option 1',
    disabled: false,
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    name: 'option',
    value: 'option1',
    label: 'Disabled Option',
    disabled: true,
    checked: false,
  },
};
