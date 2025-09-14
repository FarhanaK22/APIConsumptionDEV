import { useEffect, useState } from "react";
import getuserInfo2 from "../API/get";

function GetInfo() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getInfo = async () => {
      const result = await getuserInfo2(setError);
      setData(result);
      setloading(false);
    };
    getInfo();
  }, []);
  
  if (loading)
    return (
      <>
        <div className="get-info">loading.....</div>
      </>
    );
  if (error) return <div className="get-info">error occured.....</div>;
  if (data)
    return (
      <div className="get-info">
      <h2>GET Request</h2>
        {data?.map((item) => (
          <div key={item.id}>
            <p>userId: {item.id}</p>
            <p>title : {item.title}</p>
          </div>
        ))}
      </div>
    );
}

export default GetInfo;
