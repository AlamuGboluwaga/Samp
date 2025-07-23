import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  register: any;
  name: string;
  errors: any;
  labelClass:string
  validationRules?: object;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  name,
  register,
  errors,
  validationRules,
  labelClass,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-2 sm:space-y-2 md:space-y-12 md:text-3xl lg:space-y-2">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        className={className}
        {...register(name, validationRules)}
        {...props}
      />
      {errors && <span className="text-red-700 text-xs">{errors.message}</span>}
    </div>
  );
};

export default Input;
