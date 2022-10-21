import axios from "axios";
const baseUrl = "https://real-pink-glasses.cyclic.app";

export const uploadImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/upload/uploadImages`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
