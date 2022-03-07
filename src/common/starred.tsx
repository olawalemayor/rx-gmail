import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function Starred() {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div onClick={() => setIsStarred(!isStarred)}>
      {isStarred ? (
        <div>
          <StarIcon />
        </div>
      ) : (
        <div>
          <StarBorderIcon />
        </div>
      )}
    </div>
  );
}
