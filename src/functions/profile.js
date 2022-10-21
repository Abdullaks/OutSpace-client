import axios from "axios";
const baseUrl = "https://real-pink-glasses.cyclic.app";

export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${baseUrl}/api/user/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${baseUrl}/api/user/updateCoverPicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
