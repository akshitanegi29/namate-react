import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const { name, location } = props;

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const data = await fetch("https://api.github.com/users/akshitanegi29");
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div className="user-card">
      <img src={userInfo.avatar_url}></img>
      <h2>Name: {userInfo.name}</h2>
      <p>Address: {userInfo.html_url}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default User;
