import { useSelector } from "react-redux";

import Goalform from "../components/GoalForm";
import Goals from "../components/Goals";

import setAuthToken from "../setAuthHeader";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  setAuthToken(user.token);

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
