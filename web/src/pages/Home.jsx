import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Button from "../components/Button";
import RecommendedHostel from "../components/RecommendedHostel";

const Home = () => {
  return (
    <>
      <header className="container mt-5 ">
        <Banner />

        <section className="mt-20">
          <h1 className=" text-xl font-bold">Explore nearby</h1>

          <Card />
        </section>

        <section className="mt-20">
          <h1 className="text-xl font-bold">Recommended hostels</h1>
          <RecommendedHostel/>

          <div className="bg-gray-800 flex justify-between md:flex-row flex-col text-white rounded-2xl mt-20 lg:h-[35rem] pt-20 md:pt-0 gap-20 md:gap-0 ">
            <div className="md:w-1/3 flex flex-col justify-center pl-16 break-words text-wrap">
              <h1 className="text-lg font-extrabold">Host your Hostel.</h1>
              <p className="pt-2 font-light ">
                Are you a hostel owner? Host your hostel and Provide a place for
                students.
              </p>
              <Button
                width={"w-1/2"}
                title={"Learn More"}
                bg={" bg-white text-black   hover:bg-black hover:text-white"}
              />
            </div>

            <div className="md:w-2/3 rounded-2xl ">
              <img
                src="/images/host-hostel.jpg"
                className="rounded-2xl"
                alt="host-hostel"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Home;
