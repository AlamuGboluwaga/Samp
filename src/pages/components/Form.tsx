import React from "react";

interface FormProps {
  className: string;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({
  className,
  children,
  onSubmit,
  ...props
}) => {
  return (
    <form className={className} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
