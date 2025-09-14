import getuserInfo2 from "./get";
const UpdateQuotes = async (id, author, body, setError) => {
  let validId = await getuserInfo2(setError);
  validId.filter((item) => item.id === id);
  if (!validId) {
    setError("invalid Id");
    return null;
  } else {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT", // or PATCH if partial update
      body: JSON.stringify({
        title: author,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }
};

export default UpdateQuotes;
