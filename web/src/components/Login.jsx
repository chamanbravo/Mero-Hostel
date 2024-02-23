/* eslint-disable */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { signInSchema } from "../Schemas/loginSchemas";
import Button from "./Button";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserDetailSlice.jsx";

const Login = ({ handleCross, handleRegister }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const { values, errors, handleBur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        dispatch(loginUser(values));
        action.resetForm();
      },
    });
  const { token } = useSelector((state) => state.userDetail);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-30  ">
      <div className="container flex justify-center items-center w-full">
        <div className=" rounded-2xl   bg-white p-4 flex justify-between items-center w-4/5 md:w-2/3 lg:w-[50rem] py-16 relative">
          <div className="absolute top-0 right-0 m-4">
            <RxCrossCircled
              size={20}
              className="hover:scale-110 transition-all ease-in duration-300"
              onClick={handleCross}
            />
          </div>
          <div className=" md:w-1/3 hidden md:flex  ">
            <img
              src="/images/pattern.jpg"
              className="rounded-2xl "
              width={150}
              alt=""
            />
          </div>
          <div className="w-full md:w-2/3 flex justify-center items-center flex-col ">
            <h2 className=" font-bold text-2xl mb-10">Sign in</h2>
            <form id="login" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="pt-2 font-bold">Email</label>
                <input
                  type="email"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Email "
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-600 italic">{errors.email}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="pt-2 font-bold">Password</label>
                <input
                  type="password"
                  id="password"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Password "
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600 italic">{errors.password}</p>
                ) : null}
              </div>
              <Button
                width={"w-2/3"}
                bg={
                  " bg-[#ff385c] text-white   hover:bg-white hover:text-[#ff385c]"
                }
                title={"Sign in"}
              />

              <div className="pt-2">
                <h5 className="font-medium">
                  Not a member?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={handleRegister}
                  >
                    Register here
                  </span>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
