import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-gentle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "gradient-primary text-primary-foreground hover:gradient-primary-hover shadow-gold hover:shadow-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:gradient-accent hover:text-accent-foreground hover:border-transparent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Y3 Smiles Dental Custom Variants
        cta: "gradient-accent text-accent-foreground hover:gradient-accent-hover shadow-medium hover:shadow-hover font-semibold tracking-wide uppercase text-xs px-8 py-3",
        hero: "gradient-accent text-accent-foreground hover:gradient-accent-hover shadow-large hover:shadow-hover font-bold tracking-widest uppercase px-10 py-4 text-sm",
        // NEW Golden CTA Variant
        learn: "bg-primary/10 text-primary hover:gradient-primary hover:text-primary-foreground border-2 border-primary/20 hover:border-transparent font-medium hover:shadow-medium",
        // Booking Button Variant - Custom color #B5A642
        booking: "bg-[#B5A642] text-white hover:bg-[#A19237] shadow-medium hover:shadow-hover font-semibold tracking-wide uppercase text-xs px-8 py-3 transition-gentle",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
