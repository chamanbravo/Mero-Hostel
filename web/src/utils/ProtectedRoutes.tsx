import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { toggle } from "../features/register";
import { useDispatch, useSelector } from "react-redux";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: "in" }));
  };

  if (!user.firstName){
    toggleMenuStateIn()
    return <Navigate to='/' />
  }

  return <Outlet />
    
}

export default ProtectedRoutes;
