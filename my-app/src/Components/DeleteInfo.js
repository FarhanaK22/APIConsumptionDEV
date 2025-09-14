import { useState } from "react";
import DeleteQuote from "../API/delete";

function DeleteInfo() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormData] = useState({
    id: "",
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

    const result = await DeleteQuote(formdata.id, setError);

    if (!error) setData(result);
    setloading(false);
  };

  if (loading) return <div className="put-info">Submitting…</div>;
  if (error) return <div className="put-info">Error: {error}</div>;

  return (
    <div className="delete-info">
      <h2>DELETE Request</h2>
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
        <button type="submit">Delete</button>
      </form>

      {data && (
        <div className="result">
          <h3>Deleted from Server:</h3>
          <p>Title (Author): {data.title}</p>
          <p>Body: {data.body}</p>
          <p>ID: {data.id}</p>
        </div>
      )}
    </div>
  );
}

export default DeleteInfo;
