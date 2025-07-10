import React from 'react'

interface InputProps {
  label: string;
  inputclassName:string;
}
const Input: React.FC<InputProps> = ({ label,inputclassName, ...props }) => {
  return (
    <div className="">
      <label htmlFor="">{label}</label>
      <input className={inputclassName} {...props} />
    </div>
  );
};

export default Input