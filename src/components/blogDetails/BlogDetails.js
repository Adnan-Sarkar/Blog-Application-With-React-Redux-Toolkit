import React from "react";
import TagsSpan from "../tags/TagsSpan";
import { useDispatch } from "react-redux";
import { fetchBlog } from "../../features/blog/blogSlice";

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();
  const { title, description, image, likes, isSaved, tags, id } = blog || {};

  const handleLikes = () => {
    const totalLikes = likes + 1;
    dispatch(fetchBlog({ id, totalLikes, isSaved }));
  };

  const handleSave = () => {
    const isSavedOrNot = isSaved ? false : true;
    const toggleSaved = true;
    dispatch(fetchBlog({ id, isSaved: isSavedOrNot, toggleSaved }));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          <TagsSpan tags={tags} />
        </div>
        <div className="btn-group">
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={handleLikes}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>

          <button
            className="active save-btn"
            id="lws-singleSavedBtn"
            onClick={handleSave}
          >
            <i
              className={
                isSaved
                  ? "active fa-regular fa-bookmark"
                  : "fa-regular fa-bookmark"
              }
            ></i>{" "}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
