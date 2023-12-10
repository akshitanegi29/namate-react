import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        Click me!
      </button>
      <span> Count {count}</span>
      <h2>Name: {name}</h2>
      <p>Address: {location}</p>
    </div>
  );
};

export default User;
