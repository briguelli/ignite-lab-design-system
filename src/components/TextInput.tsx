import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextinputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextinputRootProps) {
  return  (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayname = 'TextInput.Root'


export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayname = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
  return (
      <input 
        className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
        {...props}
      />
  )
}

TextInputInput.displayname = 'TextInput.Input'


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}