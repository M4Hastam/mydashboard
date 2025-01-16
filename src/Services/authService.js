import axios from "axios";

export const API_URL = "http://localhost:1357/api/users/";

// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// Get Login Status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "loginstatus");
  
  return response.data;
};

// Get user profile
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");
  return response.data;
};

const authService = {
  login,
  getLoginStatus,
  getUser
};

export default authService;
