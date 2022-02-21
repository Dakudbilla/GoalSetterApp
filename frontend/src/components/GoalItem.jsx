import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { editGoal } from "../features/goals/goalSlice";

function GoalItem({ goal, removeGoal }) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editGoal(goal._id));
  };
  return (
    <>
      <div className="goal-container">
        <div className="sub-container">
          <div className="goal-text">{goal.text}</div>
          <div className="createdat">{moment().fromNow(goal.createdAt)}</div>
        </div>
        <div className="sub-container">
          <div className="goal-edit" onClick={handleEdit}>
            <FaEdit /> edit
          </div>
          <div className="goal-delete" onClick={() => removeGoal(goal._id)}>
            <AiOutlineDelete /> delete
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default GoalItem;
