import React from "react";
import Form from "./components/Form";
import Input from "./components/input";
import Button from "./components/Button";
import Header from "./components/Header";
import Greetings from "./components/Greetings";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-screen flex ">
      <section className="h-full w-1/2 ">Left</section>

      <section className="h-full w-1/2  flex flex-col pt-10 px-6 space-y-6 bg-gray-50">
        <Header>Login</Header>
        <Greetings />
        <div className="w-full flex justify-center">
          <Form className="h-[32rem] w-[32rem] rounded-md space-y-2 text-gray-600 ">
            <Input
              label="Email"
              placeholder="Please enter your Email"
              className="inputClass"
            />
            <p>error</p>
            <Input
              label="Password"
              type={`password`}
              placeholder="Please enter your Email"
              className="inputClass"
            />
            <Button className="buttonClass">Submit</Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
