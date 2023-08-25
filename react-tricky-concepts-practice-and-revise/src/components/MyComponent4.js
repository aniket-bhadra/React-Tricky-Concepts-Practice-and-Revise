import React, { useState } from "react";

function MyComponent4() {
  const [count, setCount] = useState(0);
  console.log(`[${new Date().toISOString()}] count real value is: ${count}`);

  function asynchrounusMine() {
    console.log(`[${new Date().toISOString()}] before state update`);
    setCount(count + 2);
    console.log(`[${new Date().toISOString()}] after state update`);
  }

  function hello() {
    const message = "hello from hello function";
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  function FN1 () {
    console.log(`[${new Date().toISOString()}]---FN1`)
  }
  function FN2 () {
    console.log(`[${new Date().toISOString()}]---FN2`)
  }
  function FN3 () {
    console.log(`[${new Date().toISOString()}]---FN3`)
  }
  function FN4 () {
    console.log(`[${new Date().toISOString()}]---FN4`)
  }
  function FN5 () {
    console.log(`[${new Date().toISOString()}]---FN5`)
  }
  function FN6 () {
    console.log(`[${new Date().toISOString()}]---FN6`)
  }
  function FN7 () {
    console.log(`[${new Date().toISOString()}]---FN7`)
  }

  const handleClick = () => {
    asynchrounusMine();
    hello();
    FN1()
    FN2()
    FN3()
    FN4()
    FN5()
    FN6()
    FN7()
    console.log(
      `[${new Date().toISOString()}] count value inside handleClick: ${count}`
    );
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
        <h2 style={{ color: "#333" }}>
          emulating the plain js behaviour with react
        </h2>
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

export default MyComponent4;
