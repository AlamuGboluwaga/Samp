import React, { useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Loader from "./components/Loader";
import { useForm } from "react-hook-form";
import Bolo from "../assets/bolo.jpeg";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Form Data:", data);
    // Simulate async login process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    reset();
  };

  console.log(watch());

  return (
    <div className="h-screen w-screen flex ">
      <section className="h-full w-1/2 hidden sm:hodden lg:block ">
        <img src={Bolo} alt="SOHK Image" className="h-full w-full" />
      </section>
      <section className="h-full w-full pt-6 px-2 space-y-10 sm:h-full sm:w-full flex flex-col sm:py-10 sm:space-y-16 bg-gray-50 lg:h-full lg:w-1/2 lg:text-sm  ">
        <Header>Login</Header>
        <Greetings />
        <div className="w-full  p-x2 flex justify-center ">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className=" 
            flex flex-col justify-center items-center
            h-[25rem] w-full  sm:h-[50rem] sm:w-[40rem] lg:h-[25rem] lg:w-[35rem]   sm:shadow-xl rounded-md space-y-2 text-gray-600 "
          >
            <Input
              label="Email"
              labelClass="labelClass"
              placeholder="Please enter your email"
              className="inputClass"
              name="email"
              register={register}
              errors={errors.email}
              validationRules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              }}
            />
            <Input
              label="Password"
              labelClass="labelClass"
              type={`password`}
              placeholder="Please enter your password"
              className="inputClass"
              name="password"
              register={register}
              errors={errors.password}
              validationRules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
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
