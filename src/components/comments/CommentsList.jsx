import React from "react";
import Comments from "./Comments";

function CommentsList() {
  return (
    <div className="block grid gap-10">
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
}

export default CommentsList;
