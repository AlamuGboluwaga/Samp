import React from "react";
import Form from "./components/Form";
import Input from "./components/input";

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
          <Form className="h-[32rem] w-[32rem] rounded-md ">
            <Input
              label="Email"
              placeholder="Please enter your Email"
              className="border border-gray-200 h-10 w-[25rem] p-4 rounded-sm outline-none"
            />
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
