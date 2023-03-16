import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
