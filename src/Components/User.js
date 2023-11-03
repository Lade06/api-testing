import { useState, useEffect } from "react";
import "./User.css";



const User = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error("Error:", error));
  }, []); // The empty dependency array ensures the effect runs once on component mount

  return (
    <div>
     
      <div className="container mt-5">
        <div className="row">
          {userInfo.map((user) => (
            <div className="col-md-4" key={user.id}>
              <div
                className="userBox"
                style={{
                  background: "red",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <b>{user.name}</b>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default User;
