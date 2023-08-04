import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  let a = 0;
  // console.log(a);
  console.log(`[${new Date().toISOString()}] ${count}`); 

  const handleClick = () => {
    // console.log("before setTimeout!!");
    // setTimeout(() => {
    //   // setCount((prevValue) => prevValue + 1);
    //   setCount(count + 1);
    //   for (var i = 0; i < 1000; i++) {
    //     a = a + i;
    //     console.log(a)
    //   }
    //   console.log("State updated:", count);
    // }, 1000);

    // for (let i = 0; i < 1000; i++) {
    //   console.log((i += i));
    // }
    // console.log("after setTimeout");
    
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount(count + 1);
    setCount(count + 1);
    
    console.log(`[${new Date().toISOString()}] after state update ${count}`);
  };

  const resetHandler = () => setCount(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "2px solid #333",
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333" }}>Updated the State Using Function Form</h2>
        <p style={{ fontSize: "36px", fontWeight: "bold", margin: "20px 0" }}>
          Count: {count}
        </p>
        <div>
          <button
            onClick={handleClick}
            style={{
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Increment
          </button>
          <button
            onClick={resetHandler}
            style={{
              background: "#dc3545",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
