import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signInSchema } from "../Schemas/loginSchemas";
import Button from "./Button";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserDetailSlice.jsx";
import { toast } from "react-toastify";

const Login = ({ handleCross, handleRegister }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.userDetail);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, action) => {
       await dispatch(loginUser(values));
       action.resetForm();

      //  if(isLoggedIn){
      //   toast.success("Login Successful")
      // }

      },
    });

    

 

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-30">
      <div className="container flex justify-center items-center w-full">
        <div className="rounded-2xl bg-white p-4 flex justify-between items-center w-4/5 md:w-2/3 lg:w-[50rem] relative">
          <div className="absolute top-0 right-0 m-4">
            <RxCrossCircled
              size={20}
              className="hover:scale-110 transition-all ease-in duration-300"
              onClick={handleCross}
            />
          </div>
          <div className="md:w-1/3 hidden md:flex">
            <img
              src="/images/pattern.jpg"
              className="rounded-2xl "
              width={150}
              alt=""
            />
          </div>
          <div className="w-full md:w-2/3 flex justify-center items-center flex-col ">
            <h2 className="font-bold text-2xl mb-10">Sign in</h2>
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600 italic">{errors.password}</p>
                ) : null}
              </div>
              <Button
                type="submit"
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
            {showSuccessMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Login Successful!</span>
                <button
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setShowSuccessMessage(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
