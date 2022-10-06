import React from "react";
import { Avatar } from "@mui/material";
import profile from "../../static/img/profile.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";

function PostedContent() {
  return (
    <div>
      <div className="flex justify-around mx-3 mt-2">
        <Avatar src={profile} />
        <div className="basis-1/2 mt-1">yurimuahxx</div>
        <div className="flex justify-around basis-1/3">
          <button className="basis-1/2 hover:text-blue-600">수정</button>
          <button className="basis-1/2 hover:text-red-600">삭제</button>
        </div>
      </div>
      <img
        src={require("../../static/img/feed_img.jpg")}
        className="w-100 h-100 m-auto mt-2 w-full"
        alt="img"
      />
      <div className="m-5">
        <button>
          <AiOutlineHeart className="text-3xl" />
        </button>
        <button className="mx-5">
          <TbMessageCircle2 className="text-3xl" />
        </button>
        <h1 className="text-gray-500 mt-3">10초 전</h1>
      </div>
    </div>
  );
}

export default PostedContent;
