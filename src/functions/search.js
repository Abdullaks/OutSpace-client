import axios from "axios";

const baseUrl = "https://real-pink-glasses.cyclic.app";

export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/user/search/${searchTerm}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
