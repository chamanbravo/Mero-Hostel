import { jwtDecode } from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Profile = () => {
  const { isLoggedIn, token } = useSelector((state) => state.userDetail);

  // const navigate = useNavigate();
  // if (!isLoggedIn) {
  //   navigate("/");
  // }

  if (token) {
    const decode = jwtDecode(token);
    // console.log(decode);
  }
  const handleBooked =()=>{
    console.log('booked')
  }

  const handleSaved=()=>{
    console.log('saved')
  }

  return (
    <>
      <main className="container flex justify-between items-center gap-6 md:gap-0 md:flex-row flex-col">
        <section className=" md:w-1/2">
          <div className=" flex justify-center items-center">
            <header className="border px-20 mt-10 pt-10 rounded-xl">
              <div>
                <img
                  src="/images/profile.webp"
                  width={150}
                  className=" rounded-full"
                  alt=" profile of the user"
                />
              </div>

              <div className="my-10 flex flex-col justify-center items-center">
                
                <h1 className=" font-bold text-3xl mt-4">Chaman Bravo</h1>
                <h1 className="user-profile-h">Email</h1>

                <p className="user-profile-p">afdad</p>
                <h1 className="user-profile-h">Contact Details</h1>

                <p className="user-profile-p">fdasf</p>
              </div>

              <div className="flex justify-center items-center mb-10">
              <Button
                  width={"w-2/3"}
                  bg={
                    " bg-[#ff385c] text-white   hover:bg-white hover:text-[#ff385c]"
                  }
                  title={"Edit Profile"}
                />

              </div>
            </header>
          </div>
        </section>

        <section className="border md:w-1/2 flex justify-center items-center flex-col">

          <h1 className="text-4xl font-bold mt-10">
            Your Hostel 
          </h1>

          <div className="flex border rounded-xl  w-1/2  gap-4 my-10 text-2xl">
           <div className="user-profile-nav" onClick={handleBooked}>
            Booked

           </div> 


           <div className="user-profile-nav" onClick={handleSaved}>
            Saved

           </div>
          </div>



        </section>
      </main>
    </>
  );
};

export default Profile;
