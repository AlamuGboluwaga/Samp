import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  register: any;
  name: string;
  errors: any
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  name,
  register,
    errors,
  ...props
  
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={className}
        {...register(name, {
          required: "Please fill the field",
          maxLength: { value: 50, message: "Maximum length exceeded" },
        })}
        {...props}
        {...errors}
      />
    </div>
  );
};

export default Input;
