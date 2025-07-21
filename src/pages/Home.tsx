import React from "react";
import Bolo from "../assets/bolo.jpeg";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
    <img src={Bolo} alt="Bolo" className="h-screen w-screen object-cover" />
    </div>
  );
};

export default Home;
