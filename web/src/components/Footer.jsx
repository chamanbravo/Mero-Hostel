import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="mt-20">
        <main className=" grid md:grid-cols-3 list-none bg-gray-300  items-center py-10 text-center ">
          <div className="pl-4 break-words md:w-64">
            <p className="text-sm">
              Your smart hostel booking site so you can find hostels faster
            </p>

            <div className=" flex flex-col py-2">
              <h1 className=" text-lg">Join the community.</h1>
              <div className=" flex gap-4 justify-center items-center">
                <FaFacebook
                  size={20}
                  className="hover:scale-110 pointer shadowin "
                />
                <FaInstagram
                  className="hover:scale-110 pointer shadowin "
                  size={20}
                />
                <FaYoutube
                  className="hover:scale-110 pointer shadowin "
                  size={20}
                />
              </div>
            </div>
          </div>

          <div>
            <li className="font pointer">Mobile Apps</li>
            <li className="font pointer">Company</li>
            <li className="font pointer">Sitemap</li>
          </div>

          <div>
            <li className="font pointer">Help</li>
            <li className="font pointer">Privacy Policy</li>
            <li className="font pointer">How MeroHostel Works</li>
          </div>
        </main>

        <main className="bg-gray-600 flex flex-col justify-center items-center pt-5">
          <Link to="/">
            <img src="/images/hostel.png" width="30px " alt="" />
          </Link>

          <p className="text-white font-extralight text-center py-4">
            Copyright {year} MeroHostel | All rights reserved | Developed by
            Sagar Thapa.
          </p>
        </main>
      </footer>
    </>
  );
};

export default Footer;
