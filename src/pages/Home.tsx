import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="h-screen w-screen bg-amber-200">
      <div className="flex justify-between">
        <p>Home</p>
        <button className="">Login</button>
      </div>
    </div>
  );
};

export default Home;
