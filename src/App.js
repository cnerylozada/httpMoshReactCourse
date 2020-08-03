import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const getPosts = async () => {
    const { data } = await axios.get(postUrl);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: lastPostAdded } = await axios.post(postUrl, obj);
    setPosts([lastPostAdded, ...posts]);
  };

  const handleUpdate = (post) => {
    console.log("Update", post);
  };

  const handleDelete = (post) => {
    console.log("Delete", post);
  };
  return (
    <React.Fragment>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleUpdate(post)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(post)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
