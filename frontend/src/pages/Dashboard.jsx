import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Goalform from "../components/GoalForm";
import { getGoals } from "../features/goals/goalSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    dispatch(getGoals());
  }, []);
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>

      <Goalform />
    </>
  );
};

export default Dashboard;
