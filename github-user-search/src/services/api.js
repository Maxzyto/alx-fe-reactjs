import axios from "axios";

const API_BASE_URL = "https://api.github.com";

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};