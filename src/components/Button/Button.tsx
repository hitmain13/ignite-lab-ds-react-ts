import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-cyan-500 py-4 px-3 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
      )}
    >
      {children}
    </button>
  )
}