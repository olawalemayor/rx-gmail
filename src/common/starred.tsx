import React, { Fragment, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import withTooltip from "./withTooltip";

function Starred({ showTooltip }: any) {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <Fragment>
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
      {showTooltip && isStarred && <div className="tooltip">Starred</div>}
      {showTooltip && !isStarred && <div className="tooltip">Not starred</div>}
    </Fragment>
  );
}

export default withTooltip(Starred);
