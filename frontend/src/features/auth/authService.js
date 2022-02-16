import axios from "axios";

const API_URL = "/api/users/";

//register user
const register = async (userData) => {
  const res = axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", (await res).data);
  }

  return res.data;
};

const authService = {
  register,
};

export default authService;
