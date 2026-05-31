import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import MobileRoutes from "./routes/MobileRoutes";
import DesktopRoutes from "./routes/DesktopRoutes";
import { useIsDesktop } from "./hooks/useIsDesktop";

const App = () => {
  const isDesktop = useIsDesktop();

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {isDesktop ? (
        <DesktopRoutes />
      ) : (
        <div className="max-w-7xl mx-auto min-h-screen">
          <MobileRoutes />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
