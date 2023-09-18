import { type InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  className, type, disabled, ...props 
}, ref) => {
  return (
    <input
      className={twMerge(`
        
      `, className)}
      type={type}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };