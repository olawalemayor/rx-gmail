import { FunctionComponent, Fragment } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import withTooltip from "../../common/withTooltip";

interface AppsProps {
  showTooltip: boolean;
}

const Apps: FunctionComponent<AppsProps> = ({ showTooltip }: AppsProps) => {
  return (
    <Fragment>
      <div className="google-apps header-icon hover-btn">
        <AppsIcon />
      </div>
      {showTooltip && <div className="tooltip">Google apps</div>}
    </Fragment>
  );
};

export default withTooltip(Apps);
