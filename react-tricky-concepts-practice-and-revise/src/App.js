import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import MyComponent3 from "./components/MyComponent3";
import MyComponent4 from "./components/MyComponent4";
import MyComponent5 from "./components/MyComponent5";
import TestingRerendering from "./components/TestingRerendering";
import sidebar from "./components/sidebar";
import TestingRerendering2 from "./components/TestingRerendering2";

function App() {
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <MyComponent4 /> */}
      {/* <MyComponent5 /> */}
      {/* <MyComponent2 /> */}
      {/* <MyComponent3 /> */}
      {/* <TestingRerendering /> */}
      <TestingRerendering2>
        <sidebar />
      </TestingRerendering2>
    </div>
  );
}

export default App;
