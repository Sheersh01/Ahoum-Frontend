import { Navigate, Route, Routes } from "react-router";

import DesktopHome from "../pages/desktop/DesktopHome";

const DesktopRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DesktopRoutes;
