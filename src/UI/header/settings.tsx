import { FunctionComponent } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  return (
    <div className="settings">
      <SettingsIcon />
    </div>
  );
};

export default Settings;
