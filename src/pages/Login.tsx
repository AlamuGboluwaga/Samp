import React, { useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Loader from "./components/Loader";
import { useForm } from "react-hook-form";
import Bolo from '../assets/bolo.jpeg'

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);
    console.log("Form Data:", data);
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  console.log(watch());

  return (
    <div className="h-screen w-screen flex ">
      <section className="h-full w-1/2 hidden sm:block">
        <img src={Bolo} alt="SOHK Image" className="h-full w-full" />
      </section>
      <section className="h-full w-full py-10 space-y-10 sm:h-full    sm:w-1/2 flex flex-col sm:py-10  px-6 sm:space-y-16 bg-gray-50">
        <Header>Login</Header>
        <Greetings />
        <div className="w-full flex justify-center ">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="h-[25rem] sm:h-[26rem] sm:w-[32rem] flex flex-col justify-center items-center  sm:shadow-xl rounded-md space-y-2 text-gray-600 "
          >
            <Input
              label="Email"
              placeholder="Please enter your email"
              className="inputClass "
              name="email"
              register={register}
              errors={errors.message}
            />
            <Input
              label="Password"
              type={`password`}
              placeholder="Please enter your password"
              className="inputClass"
              // disabled
              name="password"
              register={register}
              errors={errors.message}
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
