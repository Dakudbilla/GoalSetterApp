import { useEffect } from "react";

import Goalform from "../components/GoalForm";
import Goals from "../components/Goals";

import setAuthToken from "../setAuthHeader";

const Dashboard = () => {
  //const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setAuthToken(user.token);
  }, [user.token]);
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>

      <Goalform />
      <Goals />
    </>
  );
};

export default Dashboard;
