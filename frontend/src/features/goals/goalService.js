import axios from "axios";

const API_URL = "/api/goals/";

// add user goal
const addGoal = async (goal) => {
  const response = await axios.post(API_URL, { text: goal });
  return response.data;
};

// get all user goals
const getGoals = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// update user goal
const updateGoal = async ({ goal, goalId }) => {
  const response = await axios.patch(API_URL + `/${goalId}`, goal);

  return response.data;
};

// delete user goal
const deleteGoal = async (goalId) => {
  const response = await axios.delete(API_URL + `/${goalId}`);

  return response.data;
};

const goalService = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};

export default goalService;
