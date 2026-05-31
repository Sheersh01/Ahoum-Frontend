import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <img src={logo} alt="Nectar" className="h-10 mb-4" />

            <p className="text-gray-500 text-sm leading-6">
              Fresh groceries delivered to your doorstep in as fast as one hour.
            </p>

            <div className="flex gap-3 mt-5">
              <SocialIcon>
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon>
                <FaInstagram />
              </SocialIcon>

              <SocialIcon>
                <FaTwitter />
              </SocialIcon>

              <SocialIcon>
                <FaLinkedinIn />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-green-600 cursor-pointer">Home</li>

              <li className="hover:text-green-600 cursor-pointer">Explore</li>

              <li className="hover:text-green-600 cursor-pointer">Cart</li>

              <li className="hover:text-green-600 cursor-pointer">
                Favourites
              </li>

              <li className="hover:text-green-600 cursor-pointer">Account</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>Fresh Fruits</li>
              <li>Vegetables</li>
              <li>Beverages</li>
              <li>Dairy & Eggs</li>
              <li>Bakery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>📍 Lucknow, India</li>
              <li>📞 +91 9876543210</li>
              <li>✉️ support@nectar.com</li>
              <li>🕒 Mon - Sun (24/7)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Nectar. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-green-600">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-green-600">
              Terms & Conditions
            </span>

            <span className="cursor-pointer hover:text-green-600">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-10 h-10 rounded-full bg-green-50 hover:bg-green-500 hover:text-white transition flex items-center justify-center text-green-600">
      {children}
    </button>
  );
};

export default Footer;
