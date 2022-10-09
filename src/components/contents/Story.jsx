import React from "react";
import { Avatar } from "@mui/material";
import justin from "../../static/img/justin.PNG";

function Story() {
  return (
    <div>
      <Avatar className="fixed top-3 left-5" src={justin} />
    </div>
  );
}

export default Story;
