import React from "react";

interface HeaderProps {
  children: string;
}


const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <h1 className="text-center font-semibold text-2xl text-gray-600">
      {children}
    </h1>
  );
};

export default Header;
