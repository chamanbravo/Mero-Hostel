import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hostelDetail } from "../features/UserDetailSlice";
import { Button } from "@chakra-ui/react";
import { Star } from "../components/Star";
const HostelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hostelInfo } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(hostelDetail(id));
  }, []);
  const handleRegister = (value) => {
    navigate(`/hostel/book/${value}`);
  };

  return (
    <main className="container  md:w-max ">
      <section className="flex justify-center items-center flex-col  md:my-40 ">
        <section className="md:grid md:grid-cols-2 md:gap-10 place-items-center ">
          <img
            src="/images/hostel-main.jpg"
            className="grid-rows-2 w-[100%]"
            alt=""
          />

          <div className="hidden md:grid md:grid-cols-2 md:gap-10  ">
            <div className="grid grid-cols-1 gap-y-6">
              <img src="/images/hostel-main.jpg" className="w-52" alt="" />
              <img src="/images/hostel-main.jpg" className="w-52" alt="" />
            </div>

            <div className="grid grid-cols-1 gap-y-6">
              <img src="/images/hostel-main.jpg" className="w-52" alt="" />
              <img src="/images/hostel-main.jpg" className="w-52" alt="" />
            </div>
          </div>
        </section>

        <hr className=" mt-10 w-full" />

        <section className="mt-10 ">
          <h1 className="capitalize font-extrabold text-4xl">
            {hostelInfo.hostelName}
          </h1>

          <p className="mt-10 font-semibold capitalize text-xl">
            {hostelInfo.hostelDescription}
          </p>

          <div className="flex justify-between mt-2">
            <p>{hostelInfo.hostelLocation}</p>
            <p>{hostelInfo.hostelPrice}</p>
          </div>

          <div className="flex justify-between  mt-2">
            <p className="flex">
              <Star value={hostelInfo.hostelRating} />
            </p>
            <p>{hostelInfo.hostelContact}</p>
          </div>

          <div className="text-center flex mt-5 justify-center items-center">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                handleRegister(hostelInfo._id);
              }}
            >
              Book Now
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HostelDetail;
