const addQuotes = async (author, body, setError) => {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: author,
      body: body,
      userId: Math.random().toString(30).slice(2),
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
};

export default addQuotes;
