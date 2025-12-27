import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Container from "../Container/Container";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <Container>
        <div className="px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo & Description */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">
                CS — Ticket System
              </h2>
              <p className="text-sm leading-relaxed">
                We are dedicated to support our customers 24/7 . Whatever problem you face, please contact us, we're always here for you...
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Our Mission</li>
                <li className="hover:text-white cursor-pointer">
                  Contact Sales
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Products & Services
                </li>
                <li className="hover:text-white cursor-pointer">
                  Customer Stories
                </li>
                <li className="hover:text-white cursor-pointer">
                  Download Apps
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-white font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-white cursor-pointer">Join Us</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Social Links</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaTwitter /> @CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaLinkedinIn /> CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaFacebookF /> CS — Ticket System
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <TfiWorld /> support@cst.com
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
