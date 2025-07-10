import React from "react";

interface FormProps {
  className:string
  children: any;
}

const Form: React.FC<FormProps> = ({className, children, ...props }) => {
  return <form className={className} {...props}>{children}</form>;
};

export default Form;
