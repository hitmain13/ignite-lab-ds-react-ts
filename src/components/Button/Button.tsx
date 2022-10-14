import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-cyan-500 py-3 px-4 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
