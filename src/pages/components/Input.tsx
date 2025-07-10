import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  register:any
}

const Input: React.FC<InputProps> = ({ label, className,name,register, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="">{label}</label>
      <input
        className={className}
        {...register(name, { required:'please fill the field', maxLength:{value:true,message:'maximum lenth exceeded'} })}
        {...props}
      />
    </div>
  );
};

export default Input
