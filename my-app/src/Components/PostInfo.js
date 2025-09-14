import { useState } from "react";
import addQuotes from "../API/post"; // make sure this sends POST request

function PostInfo() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormData] = useState({
    author: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const result = await addQuotes(formdata.author, formdata.body, setError);
    setData(result);
    setloading(false);
  };

  if (loading) return <div className="post-info">Submitting…</div>;
  if (error) return <div className="post-info">Error: {error}</div>;

  return (
    <div className="post-info">
      <h2>POST Request</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={formdata.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Body: </label>
          <textarea
            name="body"
            value={formdata.body}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {data && (
        <div className="result">
          <h3>Response from Server:</h3>
          <p>Author: {data.author}</p>
          <p>Body: {data.body}</p>
          <p>ID: {data.id}</p>
        </div>
      )}
    </div>
  );
}

export default PostInfo;
