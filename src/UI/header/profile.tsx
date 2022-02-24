import { FunctionComponent } from "react";
import "./profile.css";
import profileImg from "../../assets/images/gmail transparent logo.png";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <div className="profile">
      <img src={profileImg} alt="" />
    </div>
  );
};

export default Profile;
