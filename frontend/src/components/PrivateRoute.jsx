import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent }) => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
