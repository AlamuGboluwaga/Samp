import React from "react";
import Bolo from "../assets/bolo.jpeg";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <section
        className=" h-full w-full lgh-full lgw-full"
        onClick={handleClick}
      >
        <img src={Bolo} alt="Bolo" className="h-[90%] w-full object-fit" />
      </section>
      <section className="h-full w-1/2 hidden  lgblock lgh-full lgw-full "></section>
    </div>
  );
};

export default Home;
