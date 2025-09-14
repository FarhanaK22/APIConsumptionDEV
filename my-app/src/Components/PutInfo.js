import { useState } from "react";
import UpdateQuotes from "../API/put";

function PutInfo() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormData] = useState({
    id: "",
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

    const result = await UpdateQuotes(
      formdata.id,
      formdata.author,
      formdata.body,
      setError
    );
    if (!error) setData(result);
    setloading(false);
  };

  if (loading) return <div className="put-info">Submitting…</div>;
  if (error) return <div className="put-info">Error {error}</div>;

  return (
    <div className="put-info">
      <h2>PUT Request</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="number"
            name="id"
            value={formdata.id}
            onChange={handleChange}
            required
          />
        </div>

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
          <textarea name="body" value={formdata.body} onChange={handleChange} />
        </div>

        <button type="submit">Update</button>
      </form>

      {data && (
        <div className="result">
          <h3>Response from Server:</h3>
          <p>Title (Author): {data.author}</p>
          <p>Body: {data.body}</p>
          <p>ID: {data.id}</p>
        </div>
      )}
    </div>
  );
}

export default PutInfo;
