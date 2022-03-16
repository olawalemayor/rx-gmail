import React, { Fragment } from "react";
import withTooltip from "../../common/withTooltip";

function TopIconButton({ Button, showTooltip, tip, action }: any) {
  return (
    <Fragment>
      <button className="hover-btn circle">
        <Button onClick={() => action()} />
      </button>
      {showTooltip && tip && <div className="tooltip">{tip}</div>}
    </Fragment>
  );
}

export default withTooltip(TopIconButton);
