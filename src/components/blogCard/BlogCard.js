import React from "react";
import { Link } from "react-router-dom";
import TagsSpan from "./../tags/TagsSpan";

const BlogCard = ({ blog }) => {
  const { title, image, likes, isSaved, tags, createdAt, id } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {" "}
          {title}{" "}
        </Link>
        <div className="lws-tags">
          <TagsSpan tags={tags} />{" "}
        </div>

        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
