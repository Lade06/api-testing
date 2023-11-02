import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error("Error:", error));
  }, []); // The empty dependency array ensures the effect runs once on component mount

  return (
    <div>

      {/* <div className="container">
        <div className="row">
        <div className="userBox  ">
        {userInfo.map((user) => (
         <div className="col-md-4 d-flex" >
           <div  style={{ background: "red", width: "15%" }}>
            <b key={user.id}>{user.name}</b>
            <p key={user.id}>{user.email}</p>
            <p>{user.address.street}</p>
          </div>
         </div>
        ))}
      </div> 
        </div>
      </div> */}


      {/* <div className="userBox ">
        {userInfo.map((user) => (
          <div style={{ background: "red", width: "15%" }}>
            <b key={user.id}>{user.name}</b>
            <p key={user.id}>{user.email}</p>
            <p>{user.address.street}</p>
          </div>
        ))}
      </div> */}

 <div className="container mt-5">
  <div className="row">
    {userInfo.map((user) => (
      <div className="col-md-4" key={user.id}>
        <div className="userBox d-flex " style={{ background: "red", width: "100%", marginBottom: "20px" }}>
          <b>{user.name}</b> <br /><br />
          <p>{user.email}</p> <br /><br />
          <p>{user.address.street}</p>
        </div>
      </div>
    ))}
  </div>
</div> 

    </div>
  );
}

export default App;
