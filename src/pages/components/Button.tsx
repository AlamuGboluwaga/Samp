import React from 'react'

interface ButtonProps {
  children: string;
  className:string
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button