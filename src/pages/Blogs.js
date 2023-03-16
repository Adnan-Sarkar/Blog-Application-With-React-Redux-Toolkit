import React, { useEffect } from "react";
import SideBar from "./../components/sidebar/SideBar";
import BlogCard from "./../components/blogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./../features/blogs/blogsSlice";

const Blogs = () => {
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sortBy, option } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isError) {
    content = <p>{error}</p>;
  } else if (blogs?.length > 0) {
    content = blogs
      ?.filter((blog) => {
        if (option === "Saved") {
          return blog.isSaved;
        } else {
          return true;
        }
      })
      .sort((obj1, obj2) => {
        if (sortBy === "newest") {
          const date1 = new Date(obj1.createdAt);
          const date2 = new Date(obj2.createdAt);
          return date2 - date1;
        } else if (sortBy === "most_liked") {
          return Number(obj2.likes) - Number(obj1.likes);
        } else {
          return 0;
        }
      })
      .map((blog) => <BlogCard key={blog.id} blog={blog} />);
  }

  return (
    <>
      <section className="wrapper">
        <SideBar />

        <main className="post-container" id="lws-postContainer">
          {content}
        </main>
      </section>
    </>
  );
};

export default Blogs;
