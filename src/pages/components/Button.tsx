import React from 'react'

interface ButtonProps {
  children: any;
    className: string
    disabled:any
}

const Button: React.FC<ButtonProps> = ({ className, children,...props }) => {
  return <button className={className} {...props}>{children}</button>;
};

export default Button