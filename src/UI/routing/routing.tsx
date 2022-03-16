import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inbox from "../../components/pages/inbox/inbox";
import Viewer from "../../components/pages/viewer";

interface RoutingProps {}

export const Routing: FunctionComponent<RoutingProps> = () => {
  return (
    <Routes>
      <Route path="inbox" element={<Inbox />} />
      <Route path="inbox/:messageId" element={<Viewer />} />
      <Route path="" element={<Navigate to="inbox" />} />
    </Routes>
  );
};
