import { FunctionComponent } from "react";
import AppsIcon from "@mui/icons-material/Apps";

interface AppsProps {}

const Apps: FunctionComponent<AppsProps> = () => {
  return (
    <div className="google-apps">
      <AppsIcon />
    </div>
  );
};

export default Apps;
