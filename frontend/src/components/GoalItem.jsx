import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

function GoalItem({ goal, removeGoal }) {
  return (
    <>
      <div className="sub-container">
        <div className="goal-text">{goal.text}</div>
        <div className="createdat">{moment().fromNow(goal.createdAt)}</div>
      </div>
      <div className="sub-container">
        <div className="goal-edit">
          <FaEdit /> edit
        </div>
        <div className="goal-delete" onClick={() => removeGoal(goal._id)}>
          <AiOutlineDelete /> delete
        </div>
      </div>
    </>
  );
}

export default GoalItem;
