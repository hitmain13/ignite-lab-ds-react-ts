import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export const Heading = ({ size = 'md', children, asChild }: HeadingProps) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx('text-gray-100 front-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}
