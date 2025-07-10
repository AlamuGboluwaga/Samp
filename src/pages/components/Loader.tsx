import React from 'react'
import { AiOutlineHistory } from "react-icons/ai";

interface LoaderProps {
  className:string
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <AiOutlineHistory className={className} />;
};

export default Loader