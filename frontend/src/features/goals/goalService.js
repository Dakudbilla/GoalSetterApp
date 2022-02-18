import axios from "axios";

const API_URL = "/api/goals/";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

//set axios header
const headers = {
  headers: {
    Authorization: "Bearer " + user.token,
  },
};
// add user goal
const addGoal = async (goal) => {
  const response = await axios.post(API_URL, { text: goal }, headers);
  return response.data;
};
// get all user goals
const getGoals = async () => {
  const response = await axios.get(API_URL, headers);

  return response.data;
};

// update user goal
const updateGoal = async ({ goal, goalId }) => {
  const response = await axios.patch(API_URL + `/${goalId}`, goal, headers);

  return response.data;
};

// delete user goal
const deleteGoal = async (goalId) => {
  const response = await axios.delete(API_URL + `/${goalId}`, headers);

  return response.data;
};

const goalService = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};

export default goalService;
