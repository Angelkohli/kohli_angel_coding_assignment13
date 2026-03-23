import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  component: Img,
  title: 'Components/Img',
  argTypes: {
    disabled: { control: 'boolean' },
    borderRadius: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

const imageUrl = 'https://via.placeholder.com/300x200?text=Sample+Image';

export const Default: Story = {
  args: {
    src: imageUrl,
    alt: 'Default Image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: imageUrl,
    alt: 'Disabled Image',
    disabled: true,
  },
};