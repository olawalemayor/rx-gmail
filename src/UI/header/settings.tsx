import { Fragment, FunctionComponent } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import withTooltip from "../../common/withTooltip";

interface SettingsProps {
  showTooltip: boolean;
}

const Settings: FunctionComponent<SettingsProps> = ({
  showTooltip,
}: SettingsProps) => {
  return (
    <Fragment>
      <div className="settings header-icon hover-btn">
        <SettingsIcon />
      </div>
      {showTooltip && <div className="tooltip">Settings</div>}
    </Fragment>
  );
};

export default withTooltip(Settings);
