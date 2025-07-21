import React from "react";

interface GreetingsProps {}

const Greetings: React.FC<GreetingsProps> = () => {
  return (
    <div className="h-14 w-full flex flex-col text-gray-500 space-y-2  ">
      <p className="font-bold text-lg">Welcome Back,</p>
      <p className="font-semibold text-sm">
        Kindly fill in you correct details
      </p>
    </div>
  );
};

export default Greetings;
