import axios from "axios";
import React, { useEffect, useState } from "react";
const Post = () => {
  const [post, setPost] = useState({});
  const fetchData = async () => {
    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log(data);
  };
  //   useEffect(() => {
  //     fetchData();
  //   }, [post]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {};
    const data = new FormData(event.target);
    for (let [key, value] of data.entries()) {
      obj[key] = value;
    }
    setPost(obj);
    fetchData();
  };
  return (
    <div className=" grid h-screen place-items-center">
      <form className=" flex w-72 flex-col" onSubmit={handleSubmit}>
        <input placeholder="title" className="m-4" name="title" />
        <input
          placeholder="description"
          type={"text"}
          className="m-4"
          name="description"
        />
        <button type="submit">Submit</button>
      </form>
      {console.log(post)}
    </div>
  );
};

export default Post;
