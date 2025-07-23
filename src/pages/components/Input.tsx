import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  register: any;
  name: string;
  errors: any;
  labelClass: string;
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
  type,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col space-y-2 sm:space-y-2 md:space-y-12 md:text-3xl lg:space-y-2">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        className={className}
        type={isPasswordType && showPassword ? "text" : type}
        {...register(name, validationRules)}
        {...props}
      />
      {isPasswordType && (
        <div
          onClick={togglePasswordVisibility}
          className="absolute top-[50%] right-5 cursor-pointer text-2xl md:text-gray-400 md:absolute md:top-[50%] md:right-5 md:cursor-pointer md:text-4xl text-gray-400 lg:absolute lg:bottom-56 lg:right-12 lg:text-2xl lg:text-gray-400"
          aria-label={showPassword ? "Hide password" : "Show password"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              togglePasswordVisibility();
            }
          }}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </div>
      )}
      {errors && <span className="text-red-700 text-xs">{errors.message}</span>}
    </div>
  );
};

export default Input;
