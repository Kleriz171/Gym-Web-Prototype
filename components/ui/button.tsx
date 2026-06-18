import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame",
  {
    variants: {
      variant: {
        flame:
          "bg-flame text-ink hover:bg-flame-soft active:scale-[0.98] shadow-[0_0_30px_-8px_rgba(255,92,0,0.7)]",
        outline:
          "border border-line bg-transparent text-bone hover:border-flame hover:text-flame",
        ghost: "bg-transparent text-bone hover:text-flame",
        bone: "bg-bone text-ink hover:bg-white active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.8rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "flame", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
