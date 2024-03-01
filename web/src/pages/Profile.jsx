import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { profileUser } from "../features/UserDetailSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";


const Profile = () => {
  const {  token, userdetails, user } = useSelector(
    (state) => state.userDetail
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [booked, setBooked] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(profileUser(token));
    }
  }, [token, dispatch]);

  const handleBooked = () => {
    setBooked(!booked);
    setSaved(false);
  };

  const handleSaved = () => {
    setSaved(!saved);
    setBooked(false);
  };

  const handleRegister = (value) => {
    navigate(`/hostel/book/${value}`);
  };

  return (
    <>
      <main className="container flex  justify-between items-center gap-6 md:gap-0 md:flex-row flex-col">
        <section className="md:w-1/2 md:fixed left-0 top-20 md:h-screen md:overflow-y-auto">
          <div className="flex justify-center items-center">
            <header className="border px-20 mt-10 pt-10 rounded-xl">
              <div>
                <img
                  src="/images/profile.webp"
                  width={150}
                  className="rounded-full"
                  alt="profile of the user"
                />
              </div>
              <div className="my-10 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl mt-4 capitalize">
                  {userdetails.username}
                </h1>
                <h1 className="user-profile-h">Email</h1>
                <p className="user-profile-p">{userdetails.email}</p>
                <h1 className="user-profile-h">Contact Details</h1>
                <p className="user-profile-p">{userdetails.phone}</p>
              </div>
              <div className="flex justify-center items-center mb-10">
                <Button
                  width={"w-2/3"}
                  bg={
                    "bg-[#ff385c] text-white hover:bg-white hover:text-[#ff385c]"
                  }
                  title={"Edit Profile"}
                />
              </div>
            </header>
          </div>
        </section>
        <section className={`w-full md:mt-10 md:w-1/2 flex justify-center items-center flex-col md:ml-auto min-h-[50vh]`}>
          <h1 className="text-4xl font-bold mt-10">Your Hostel</h1>
          <div className="flex border rounded-xl w-1/2 gap-4 my-10 md:text-2xl">
            <div
              className={`user-profile-nav ${booked && "text-blue-600"}`}
              onClick={handleBooked}
            >
              Booked
            </div>
            <div
              className={`user-profile-nav ${saved && "text-blue-600"}`}
              onClick={handleSaved}
            >
              Saved
            </div>
          </div>
          {booked && user.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-7 ">
              {user.map((hostel, index) => {
                return (
                  <Card
                    maxW="sm"
                    key={index}
                    className="border border-black my-10 w-full sm:w-5/6"
                  >
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <div className="flex justify-between">
                          <Heading size="md" className="capitalize">
                            {hostel.hostelName}
                          </Heading>
                        </div>
                        <div className="flex gap-16">
                          <Text color="blue.600" fontSize="2xl">
                            {hostel.hostelLocation}
                          </Text>
                          <Text color="blue.600" fontSize="2xl">
                            {hostel.hostelContact}
                          </Text>
                        </div>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex justify-center items-center">
                      <Button
                        width={"w-1/3"}
                        bg={
                          "bg-[#ff385c] text-white hover:bg-white hover:text-[#ff385c] flex justify-center items-center"
                        }
                        title={"Edit Profile"}
                        onClick={() => {
                          handleRegister(hostel._id);
                        }}
                      >
                        Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
          {saved && user.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-7 ">
              {/* Render Saved Hostels */}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Profile;
