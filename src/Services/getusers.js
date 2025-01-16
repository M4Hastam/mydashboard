import axios from "axios";

export const API_URL = "http://localhost:1357/api/users/";

// Get user profile
const getUsers = async ({signal}) => {
  const response = await axios.get(API_URL + "getusers",{signal});
  return response.data;
};

export { getUsers };
