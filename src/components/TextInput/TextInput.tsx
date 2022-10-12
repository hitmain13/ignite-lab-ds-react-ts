import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div
      className={clsx(
        'flex items-center h-12 rounded gap-3 py-4 px-3 bg-gray-800 w-full text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300',
      )}
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder-text-gray-400"
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
