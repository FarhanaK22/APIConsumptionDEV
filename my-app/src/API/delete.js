import getuserInfo2 from "./get";
const DeleteQuote = async (id, setError) => {
  let validId = await getuserInfo2(setError);
  validId.filter((item) => item.id === id);
  if (!validId) {
    setError("invalid Id");
    return null;
  } else {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
        setError(err);
      });
  }
};

export default DeleteQuote;
