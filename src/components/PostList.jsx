import React from "react";
import PostItem from "./PostItem";

const PostList = ({ profile, title }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {profile.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
