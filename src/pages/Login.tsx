import React, { useState } from "react";
import Form from "./components/Form";
import Input from "./components/input";
import Button from "./components/Button";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Loader from "./components/Loader";

const Login: React.FC = () => {
  const [loading,setLoading]=useState(true)
  return (
    <div className="h-screen w-screen flex ">
      <section className="h-full w-1/2 ">Left</section>

      <section className="h-full w-1/2  flex flex-col pt-10 px-6 space-y-6 bg-gray-50">
        <Header>Login</Header>
        <Greetings />
        <div className="w-full flex justify-center ">
          <Form className="h-[32rem] w-[32rem] rounded-md space-y-2 text-gray-600 ">
            <Input
              label="Email"
              placeholder="Please enter your email"
              className="inputClass"
            />
            <Input
              label="Password"
              type={`password`}
              placeholder="Please enter your password"
              className="inputClass"
            />
            <Button
              disabled={loading}
              className={`buttonClass ${
                loading && "!bg-gray-100 hover:!text-gray-400"
              }`}
            >
              {loading ? (
                <div className="h-full w-full flex justify-center items-center space-x-4  ">
                  <Loader className="animate-spin " /> <span>Loading ...</span>
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
