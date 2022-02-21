import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteGoal, getGoals } from "../features/goals/goalSlice";
import GoalItem from "./GoalItem";
import Spinner from "./Spinner";

const Goals = () => {
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getGoals());
  }, [isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="goal-container">
      {goals.map((goal) => (
        <GoalItem deleteGoal={deleteGoal} key={goal._id} goal={goal} />
      ))}
    </div>
  );
};
export default Goals;
