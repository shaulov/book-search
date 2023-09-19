import { type SelectHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<Record<string, string>>
    placeholder: string;
  }

const Select = forwardRef<HTMLSelectElement, SelectProps>((
{ name, className, options, placeholder, ...props }, ref) => {
  return (
    <select 
      className={twMerge(`
        px-2 py-1
        text-neutral-500
        bg-white
        border-0 rounded
      `, className)}
      name={name}
      ref={ref}
      {...props}
    >
      <option defaultValue={placeholder}>{placeholder}</option>
      {options.map(option => (
        <option value={option['value']} key={option['value']}>{option['name']}</option>
      ))}
    </select>
  );
});

Select.displayName = "Select";

export { Select };