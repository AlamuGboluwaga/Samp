import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="">{label}</label>
      <input className={className} {...props} />
    </div>
  );
};

export default Input
