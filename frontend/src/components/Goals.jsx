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

  const removeGoal = (id) => {
    dispatch(deleteGoal(id));
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getGoals());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="goals-container">
      {goals.map((goal) => (
        <GoalItem removeGoal={removeGoal} key={goal._id} goal={goal} />
      ))}
    </div>
  );
};
export default Goals;
