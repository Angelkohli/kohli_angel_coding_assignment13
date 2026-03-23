import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  title: 'Components/HeroImage',
  argTypes: {
    disabled: { control: 'boolean' },
    overlay: { control: 'boolean' },
    overlayColor: { control: 'color' },
    height: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

const heroImageUrl = 'https://via.placeholder.com/800x400?text=Hero+Banner';

export const Default: Story = {
  args: {
    src: heroImageUrl,
    alt: 'Hero Image',
    height: '400px',
    overlay: true,
  },
};

export const Disabled: Story = {
  args: {
    src: heroImageUrl,
    alt: 'Hero Image',
    height: '400px',
    overlay: true,
    title: 'Disabled Hero',
    disabled: true,
  },
};