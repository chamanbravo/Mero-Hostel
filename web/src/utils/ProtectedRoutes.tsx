import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const user = useSelector((state) => state.user.value);

  if (!user.firstName) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
