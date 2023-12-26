import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const { name, location } = props;

  useEffect(() => {
    console.log("effect called");
    getUserData();

    //how to cleanup setinterval in func comp
    // const timer = setInterval(() => {
    //   console.log("Timer func comp");
    // }, 2000);

    //cleanup func
    return () => {
      console.log("return useEffect invoked");
      //clearInterval(timer)
    };
  }, [count]);

  async function getUserData() {
    const data = await fetch("https://api.github.com/users/akshitanegi29");
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div className="user-card border-black border-2 w-[50%] m-2">
      <img src={userInfo.avatar_url}></img>
      <h2>Name: {userInfo.name}</h2>
      <p>Address: {userInfo.html_url}</p>
      <button className="bg-gray-300 rounded-lg w-20 m-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
      <span>{count}</span>
    </div>
  );
};

export default User;
