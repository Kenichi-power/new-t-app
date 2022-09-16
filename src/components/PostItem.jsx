import React from "react";
import logo from "../images/new1.jpg";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="pro">
      <img
        style={{ marginLeft: "50px" }}
        className="image"
        src={props.post.ing}
      />
      <div className="main">
        <h1>{props.post.name}</h1>

        <p>{props.post.body}</p>

        <MyButton
          style={{
            color: "#ff00ff80",
            border: "2px solid #ff00ff80",
            marginTop: "50px",
          }}
        >
          Click me
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
