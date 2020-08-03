import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const handleAdd = () => {
    console.log("Add");
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
