import React from "react";
import Form from "./components/Form";
import Input from "./components/input";
import Button from "./components/Button";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-screen flex ">
      <section className="h-full w-1/2 bg-gray-50">Left</section>

      <section className="h-full w-1/2  flex flex-col pt-10 px-6 space-y-6">
        <h1 className="text-center font-semibold text-2xl text-gray-600">
          Login
        </h1>
        <div className="h-14 w-full flex flex-col text-gray-500 space-y-2  ">
          <p className="font-bold text-sm">Welcome Back,</p>
          <p className="font-semibold text-sm">
            Kindly fill in you correct details
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Form className="h-[32rem] w-[32rem] rounded-md space-y-2 text-gray-600 ">
            <Input
              label="Email"
              placeholder="Please enter your Email"
              className="border border-gray-200 h-10 w-[25rem] p-4 rounded-sm outline-none focus:border focus:border-gray-400"
            />
            <Input
              label="Password"
              placeholder="Please enter your Email"
              className="border border-gray-200 h-10 w-[25rem] p-4 rounded-sm outline-none focus:border focus:border-gray-400"
            />
            <Button className="mt-15 border border-green-700 h-10 w-[25rem] p-4 rounded-sm text-green-700 flex justify-center items-center font-semibold cursor-pointer hover:bg-green-700 hover:text-white">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
