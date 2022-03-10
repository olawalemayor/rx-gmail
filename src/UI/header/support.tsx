import { FunctionComponent } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface SupportProps {}

const Support: FunctionComponent<SupportProps> = () => {
  return (
    <div className="support header-icon hover-btn">
      <HelpOutlineIcon />
    </div>
  );
};

export default Support;
