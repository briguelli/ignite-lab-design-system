import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react';
import { TextInput, TextinputRootProps } from "./Textinput";

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope/>
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email address' />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta <TextinputRootProps>

export const Default: StoryObj<TextinputRootProps> = {}

export const WithouIcon: StoryObj<TextinputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your email address' /> 
  }
}