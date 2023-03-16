import React, { useEffect } from "react";
import RelatedBlogCard from "./RelatedBlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "./../../features/relatedBlogs/relatedBlogsSlice";

const RelatedBlogs = ({ tags, currentId }) => {
  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentId }));
  }, [dispatch, tags, currentId]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedBlogs?.map((blog) => (
          <RelatedBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </aside>
  );
};

export default RelatedBlogs;
