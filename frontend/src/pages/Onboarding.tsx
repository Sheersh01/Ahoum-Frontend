import { Link } from "react-router";
import HomeScreen from "../assets/HomeScreen.png";
import Carrot from "../assets/carrot.png";

const Onboarding = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HomeScreen}
        alt="Welcome to our store"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-end pb-8 px-6">
        {/* Text Content with Dark Background */}
        <div className="w-full rounded-3xl p-8 space-y-6 text-center">
          {/* Heading */}
          <div className="w-full">
            <img src={Carrot} alt="Carrot" className="mx-auto" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome
              <br />
              to our store
            </h1>
            <p className="text-sm text-gray-200">
              Get your groceries in as fast as one hour
            </p>
          </div>

          {/* Get Started Button */}
          <Link
            to="/signin"
            className="block w-full  bg-[#53B175] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
