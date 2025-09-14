const BaseUrl = "https://jsonplaceholder.typicode.com/posts/";

// const getuserInfo1 = async ()=>
// {
//     const response = await fetch()
//     const data = await response.json()
//     console.log("data from await call", data)
// }

const getuserInfo2 = (setError) => {
  const response = fetch(`${BaseUrl}`)
    .then((response) => response.json())
    .catch((error) => setError(error.message));
  return response;
};
export default getuserInfo2;
