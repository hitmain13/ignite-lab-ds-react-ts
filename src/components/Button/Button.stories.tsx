import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
