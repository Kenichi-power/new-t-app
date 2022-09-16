import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import logo from "./images/new1.jpg";
import MyInput from "./components/UI/input/MyInput.jsx";
import MyButton from "./components/UI/button/MyButton";

const App = () => {
  const [profile, setProfile] = useState([
    { id: 1, name: "Kenes Baimukanov", body: "male", ing: logo },
    { id: 2, name: "Zhanna Baimukanova", body: "female", ing: logo },
    { id: 3, name: "Naza Baimukanova", body: "male", ing: logo },
  ]);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form style={{ width: "500px" }}>
          <MyInput style={{ width: "500px" }} placeholder="Post name" />
          <MyInput style={{ width: "500px" }} placeholder="Post description" />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <MyButton>Click</MyButton>
          </div>
        </form>
      </div>
      <PostList profile={profile} title="LIST" />
    </div>
  );
};

export default App;
