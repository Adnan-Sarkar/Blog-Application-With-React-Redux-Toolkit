import axios from "./../../utils/axios";

const getRelatedBlogs = async ({ tags, id }) => {
  const queryString =
    tags.length > 0
      ? tags?.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
      : +`id_ne=${id}`;

  const url = `/blogs?${queryString}`;
  const response = await axios.get(url);

  return response.data;
};

export default getRelatedBlogs;
