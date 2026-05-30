import { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/Logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      navigate("/onboarding", { replace: true });
    }, 2000);

    return () => window.clearTimeout(timerId);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500">
      <img src={logo} alt="Nectar Logo" />
    </div>
  );
};
export default SplashScreen;
