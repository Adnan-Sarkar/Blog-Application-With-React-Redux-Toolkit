import React from "react";
import TagsSpan from "../tags/TagsSpan";
import { Link } from "react-router-dom";

const RelatedBlogCard = ({ blog }) => {
  const { image, title, tags, createdAt, id } = blog || {};

  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          <TagsSpan tags={tags} />
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
