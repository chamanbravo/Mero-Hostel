import React, { useEffect } from "react";
import Button from "../components/Button";
import { useFormik } from "formik";
import { bookSchema } from "../Schemas/bookSchemas";
import { useDispatch, useSelector } from "react-redux";
import { bookingHostel } from "../features/UserDetailSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Book = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {token }= useSelector((state)=>state.userDetail)
  const decode = jwtDecode(token);
  

 

  const { errors, values, handleChange, handleSubmit, touched, resetForm } =
    useFormik({
      initialValues: {
        userName: decode.firstname,
        userContact: "",
        hostelName: "",
        hostelContact: "",
        hostelLocation: "",
        userGmail:decode.email,
      },
      validationSchema: bookSchema,
      onSubmit: (values) => {
        dispatch(bookingHostel(values));
        resetForm();
      },
    });

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <main className="container mt-10">
        <h1 className=" font-bold text-xl text-center ">For Booking Hostel</h1>
        <section className="flex justify-center items-center flex-col md:flex-row md:mt-20">
          <div className="w-full md:w-1/2">
            <img src="/images/official.png" alt="booking hostel details" />
          </div>

          <div className="border rounded-xl w-full md:w-1/2 py-10">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center flex-col">
                <label className="hostelLabel">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="hostelInput"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
                {errors.userName && touched.userName ? (
                  <p className="text-red-600 italic">{errors.userName}</p>
                ) : null}
              </div>

              <div className="flex items-center flex-col">
                <label className="hostelLabel">UserGmail</label>
                <input
                  type="gmail"
                  placeholder="Enter Usergmail"
                  className="hostelInput-email"
                  name="userGmail"
                  value={values.userGmail}
                  onChange={handleChange}
                />
                {errors.userGmail && touched.userGmail ? (
                  <p className="text-red-600 italic">{errors.userGmail}</p>
                ) : null}
              </div>

              <div className="flex items-center flex-col  mt-3">
                <label className="hostelLabel">User Contact</label>
                <input
                  type="text"
                  placeholder="Enter User Contact"
                  className="hostelInput"
                  name="userContact"
                  value={values.userContact}
                  onChange={handleChange}
                />
                {errors.userContact && touched.userContact ? (
                  <p className="text-red-600 italic">{errors.userContact}</p>
                ) : null}
              </div>

              <div className="flex items-center flex-col  mt-3">
                <label className="hostelLabel">Hostel Name</label>
                <input
                  type="text"
                  placeholder="Enter Hostel Name"
                  className="hostelInput"
                  name="hostelName"
                  value={values.hostelName}
                  onChange={handleChange}
                />
                {errors.hostelName && touched.hostelName ? (
                  <p className="text-red-600 italic">{errors.hostelName}</p>
                ) : null}
              </div>

              <div className="flex items-center flex-col  mt-3">
                <label className="hostelLabel">Hostel Contact</label>
                <input
                  type="text"
                  placeholder="Enter Hostel Contact"
                  className="hostelInput"
                  name="hostelContact"
                  value={values.hostelContact}
                  onChange={handleChange}
                />
                {errors.hostelContact && touched.hostelContact ? (
                  <p className="text-red-600 italic">{errors.hostelContact}</p>
                ) : null}
              </div>
              <div className="flex items-center flex-col  mt-3">
                <label className="hostelLabel">Hostel Location</label>
                <input
                  type="text"
                  placeholder="Enter Hostel Location"
                  className="hostelInput"
                  name="hostelLocation"
                  value={values.hostelLocation}
                  onChange={handleChange}
                />
                {errors.hostelLocation && touched.hostelLocation ? (
                  <p className="text-red-600 italic">{errors.hostelLocation}</p>
                ) : null}
              </div>

              <div className="flex items-center justify-center mt-3">
                <Button
                  width={" w-1/4 md:1/2 lg:w-1/5"}
                  bg={
                    " bg-[#ff385c] text-white  hover:bg-white hover:text-[#ff385c]"
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

export default Book;
