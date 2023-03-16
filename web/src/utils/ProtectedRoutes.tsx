import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store";

function ProtectedRoutes() {
  const user = useAppSelector((state) => state.user);

  if (!user.firstName) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
