import { Fragment, FunctionComponent } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import withTooltip from "../../common/withTooltip";

interface SupportProps {
  showTooltip: boolean;
}

const Support: FunctionComponent<SupportProps> = ({
  showTooltip,
}: SupportProps) => {
  return (
    <Fragment>
      <div className="support header-icon hover-btn">
        <HelpOutlineIcon />
      </div>
      {showTooltip && <div className="tooltip">Support</div>}
    </Fragment>
  );
};

export default withTooltip(Support);
