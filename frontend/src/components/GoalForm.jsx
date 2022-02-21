import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal, reset, updateGoal } from "../features/goals/goalSlice";

const Goalform = () => {
  const { editGoal, goals } = useSelector((state) => state.goals);
  let goalRef = {};

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editGoal) {
      dispatch(updateGoal({ goal: text, goalId: editGoal }));
      dispatch(reset());
      goalRef = {};
      setText("");
    } else {
      dispatch(addGoal(text));
      setText("");
    }
  };
  useEffect(() => {
    const getGoalEdited = () => {
      if (editGoal) {
        goalRef = goals.find((goal) => goal._id === editGoal);
        setText(goalRef.text);
      }
    };
    getGoalEdited();
  }, [editGoal, goals]);

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {editGoal ? "Submit Edit" : "Add Goal"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Goalform;
