import axios from "axios";
const baseUrl = "https://real-pink-glasses.cyclic.app";

//Get profile
const getProfile = async (username, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}/api/user/getProfile/` + username, config);
  return response.data;
};

//update profile Bio
const updateBio = async (infos, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${baseUrl}/api/user/updateBio`,
    infos,
    config
  );
  return response.data;
};

//Follow user
const followUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${baseUrl}/api/user/follow/` + id,
    {},
    config
  );
  return response.data;
};

//Unfollow User
const unFollowUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${baseUrl}/api/user/unfollow/` + id,
    {},
    config
  );
  return response.data;
};



const search = async (searchTerm, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${baseUrl}/api/user/search` + searchTerm,
    {},
    config
  );
  return response.data;
};







const profileService = {
  getProfile,
  updateBio,
  followUser,
  unFollowUser,
  search,

};
export default profileService;
