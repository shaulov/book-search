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
        px-2 py-1
        text-neutral-800
        bg-white
        border border-zinc-300 rounded
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