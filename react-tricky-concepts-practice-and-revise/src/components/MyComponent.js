import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("before setTimeout!!");
    setTimeout(() => {
      setCount(count + 1);
      // setCount((prevValue) => prevValue + 1);
      console.log("State updated:", count);
    }, 1000);
    console.log("after setTimeout");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
