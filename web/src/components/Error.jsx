import React from "react";

const Error = () => {
  return (
    <>
      <div className="flex justify-center items-center my-24 flex-col">
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          404
        </h1>
        <p className=" text-2xl pt-5  font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Page Not Found
        </p>
      </div>
    </>
  );
};

export default Error;
