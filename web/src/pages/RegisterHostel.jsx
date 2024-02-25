import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {  useFormik } from "formik";
import { hostelSchema } from "../Schemas/hostelSchemas";
import { hostelRegister } from "../features/UserDetailSlice";
import { toast } from "react-toastify";

const RegisterHostel = () => {
  const { token,isLoggedIn } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const setToken = !!token;
  const navigate = useNavigate();
  useEffect(() => {
    if (!setToken) {
      navigate("/");
    }
  }, []);
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      hostelName: "",
      hostelLocation: "",
      hostelPrice: "",
      hostelDescription: "",
      hostelImage: "",
      hostelRating: "",
      hostelContact: "",
    },
    validationSchema: hostelSchema,
    onSubmit: (values) => {
      dispatch(hostelRegister(values));
      resetForm();
    },
  });
  if (values.hostelRating > 5) {
    values.hostelRating = 5;
  }
  if(!isLoggedIn){
    navigate('/')
  }
  return (
    <>
      <main className="container text-center md:w-max">
        <section className="flex justify-center items-center flex-col  md:my-40 rounded-3xl  ">
          <h1 className="font-bold text-5xl p-10">Register Hostel</h1>
          <hr className="border w-full" />
          <div className="flex mt-4 flex-col xl:flex-row">
            <div className="flex justify-center items-center">
              <img src="/images/official.png" alt="" />
            </div>
            <form
              onSubmit={handleSubmit}
              className="border shadow-inner rounded-3xl"
            >
              <div className=" flex lg:gap-4 flex-wrap justify-center items-center">
                <div className="flex flex-col p-4 lg:p-10  ">
                  <label className="hostelLabel">Hostel Name</label>
                  <input
                    type="text"
                    className="hostelInput"
                    placeholder="Enter Hostel Name"
                    name="hostelName"
                    value={values.hostelName}
                    onChange={handleChange}
                  />
                  {errors.hostelName && touched.hostelName ? (
                    <p className="text-red-600 italic">{errors.hostelName}</p>
                  ) : null}
                </div>

                <div className="flex flex-col p-4 lg:p-10">
                  <label className="hostelLabel">Hostel Location</label>
                  <input
                    type="text"
                    className="hostelInput"
                    placeholder="Enter Hostel Location"
                    name="hostelLocation"
                    value={values.hostelLocation}
                    onChange={handleChange}
                  />

                  {errors.hostelLocation && touched.hostelLocation ? (
                    <p className="text-red-600 italic">
                      {errors.hostelLocation}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className=" flex gap-4 flex-wrap justify-center items-center">
                <div
                  className="flex flex-col lg:p-10 p-4
                  "
                >
                  <label className="hostelLabel">Hostel Contact</label>
                  <input
                    type="text"
                    className="hostelInput"
                    placeholder="Enter Hostel Contact"
                    name="hostelContact"
                    value={values.hostelContact}
                    onChange={handleChange}
                  />
                  {errors.hostelContact && touched.hostelContact ? (
                    <p className="text-red-600 italic">
                      {errors.hostelContact}
                    </p>
                  ) : null}
                </div>

                <div
                  className="flex flex-col lg:p-10 p-4
                "
                >
                  <label className="hostelLabel">Hostel Rating</label>
                  <input
                    type="number"
                    className="hostelInput"
                    placeholder="Enter Hostel Rating"
                    name="hostelRating"
                    value={values.hostelRating}
                    onChange={handleChange}
                  />
                  {errors.hostelRating && touched.hostelRating ? (
                    <p className="text-red-600 italic">{errors.hostelRating}</p>
                  ) : null}
                </div>
              </div>

              <div className=" flex gap-4 flex-wrap justify-center items-center">
                <div
                  className="flex flex-col lg:p-10 p-4
                  "
                >
                  <label className="hostelLabel">Hostel Price</label>
                  <input
                    type="number"
                    className="hostelInput"
                    placeholder="Enter Hostel Price  in Rs"
                    name="hostelPrice"
                    value={values.hostelPrice}
                    onChange={handleChange}
                  />
                  {errors.hostelPrice && touched.hostelPrice ? (
                    <p className="text-red-600 italic">{errors.hostelPrice}</p>
                  ) : null}
                </div>

                <div
                  className="flex flex-col lg:p-10 p-4
                  "
                >
                  <label className="hostelLabel">Hostel Image</label>
                  <input
                    type="text"
                    className="hostelInput"
                    placeholder="Enter Hostel Image"
                    name="hostelImage"
                    value={values.hostelImage}
                    onChange={handleChange}
                  />
                  {errors.hostelImage && touched.hostelImage ? (
                    <p className="text-red-600 italic">{errors.hostelImage}</p>
                  ) : null}
                </div>
              </div>

              <div
                className="flex justify-center items-center flex-col lg:p-10 p-4
              "
              >
                <label className="hostelLabel">Hostel Name</label>
                <textarea
                  id="Description"
                  className=" outline-none py-2 px-3 shadow-inner rounded-md w-52"
                  cols="30"
                  rows="5"
                  placeholder="Hostel Description"
                  name="hostelDescription"
                  value={values.hostelDescription}
                  onChange={handleChange}
                ></textarea>
                {errors.hostelDescription && touched.hostelDescription ? (
                  <p className="text-red-600 italic ">
                    {errors.hostelDescription}
                  </p>
                ) : null}
              </div>

              <div className="mb-10">
                <Button
                  width={"w-2/3"}
                  bg={
                    " bg-[#ff385c] text-white   hover:bg-white hover:text-[#ff385c]"
                  }
                  title={"Submit"}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterHostel;
