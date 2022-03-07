import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inbox from "../../components/pages/inbox/inbox";
import Spam from "../../components/pages/spam/spam";

interface RoutingProps {}

export const Routing: FunctionComponent<RoutingProps> = () => {
  return (
    <Routes>
      <Route path="spam" element={<Spam />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="" element={<Navigate to="inbox" />} />
    </Routes>
  );
};
