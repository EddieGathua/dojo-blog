import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Books I have read",
      body: "lorem ipsum...",
      author: "Kronos",
      id: 1,
    },
    {
      title: "Books I want to read",
      body: "lorem ipsum...",
      author: "Edward",
      id: 2,
    },
    {
      title: "Comics and Manga I want to read",
      body: "lorem ipsum...",
      author: "Captain America",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
