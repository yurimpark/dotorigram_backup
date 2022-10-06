import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import profile from "../../static/img/profile.jpg";

function Comments() {
  return (
    <div className="mx-auto max-w-470">
      <div className="ml-5 mt-3 flex">
        <ArrowBackIcon />
        <p className="ml-40 font-bold mb-3">댓글</p>
      </div>
      <div className="bg-neutral-100 h-16">
        <Avatar className="fixed top-3 left-5" src={profile} />
      </div>
    </div>
  );
}

export default Comments;
