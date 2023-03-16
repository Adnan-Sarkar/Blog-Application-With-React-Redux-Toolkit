import axios from "./../../utils/axios";

const getBlog = async ({ id, totalLikes, isSaved, toggleSaved }) => {
  let response;
  if (id && !totalLikes && !toggleSaved) {
    response = await axios.get(`/blogs/${id}`);
  } else if (id && totalLikes && !toggleSaved) {
    response = await axios.patch(`/blogs/${id}`, { likes: totalLikes });
  } else if (toggleSaved) {
    response = await axios.patch(`/blogs/${id}`, { isSaved });
  }

  return response.data;
};

export default getBlog;
