import React from "react";
import profile from "../../static/img/profile.jpg";
import { Avatar } from "@mui/material";

function Content() {
  return (
    <div className="flex items-center mb-4">
      <Avatar className="fixed top-3 left-5" src={profile} />
      <div className="my-2 ml-10">
        <div className="font-bold inline- float-left mr-2">strongrabbit</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
          sapiente sunt quo, velit ratione error mollitia. Libero cupiditate
          aliquam provident commodi sapiente veritatis excepturi. Ducimus quasi
          aperiam saepe ea.
        </div>
      </div>
    </div>
  );
}

export default Content;
