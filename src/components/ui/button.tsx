import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500':
              variant === 'default',
            'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500':
              variant === 'destructive',
            'border border-gray-300 bg-white hover:bg-gray-50 focus-visible:ring-gray-400':
              variant === 'outline',
            'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400':
              variant === 'secondary',
            'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400':
              variant === 'ghost',
            'text-orange-500 underline-offset-4 hover:underline focus-visible:ring-orange-500':
              variant === 'link',
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }