import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inbox from "../../components/pages/inbox/inbox";

interface RoutingProps {}

export const Routing: FunctionComponent<RoutingProps> = () => {
  return (
    <Routes>
      <Route path="inbox" element={<Inbox />} />
      <Route path="" element={<Navigate to="inbox" />} />
    </Routes>
  );
};
