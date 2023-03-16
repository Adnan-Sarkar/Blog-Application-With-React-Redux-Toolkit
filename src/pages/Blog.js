import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogDetails from "../components/blogDetails/BlogDetails";
import RelatedBlogs from "../components/relatedBlogs/RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "./../features/blog/blogSlice";

const Blog = () => {
  const { blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog({ id: blogId }));
  }, [dispatch, blogId]);

  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>

      <section className="post-page-container">
        <BlogDetails blog={blog} />

        <RelatedBlogs tags={blog.tags} currentId={blog.id} />
      </section>
    </>
  );
};

export default Blog;
