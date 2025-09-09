import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", url: "#" },
      { name: "Collections", url: "#" },
      { name: "About Us", url: "#" },
      { name: "Contact", url: "#" },
    ],
    Support: [
      { name: "FAQ", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Returns", url: "#" },
      { name: "Privacy Policy", url: "#" },
    ],
    Contact: [
      { name: "+1 (555) 123-4567", url: "tel:+15551234567" },
      { name: "info@namsropa.com", url: "mailto:info@namsropa.com" },
      { name: "123 Fashion Ave, NYC", url: "#" },
    ],
  };

  return (
    <footer className="bg-white text-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-black mb-6">
              Nik Tech
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating timeless fashion pieces that celebrate elegance and
              craftsmanship for the modern world.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-black mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-xl font-semibold text-black mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-600">
                Get updates on new collections and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-lg font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4 md:mb-0 flex items-center">
            © {currentYear} Nik Tech. Made with{" "}
            <FaHeart className="text-red-500 mx-1" /> by our team.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-600">Accepted Payments:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-gray-200 rounded-sm flex items-center justify-center text-xs font-medium">
                Visa
              </div>
              <div className="w-8 h-5 bg-gray-200 rounded-sm flex items-center justify-center text-xs font-medium">
                MC
              </div>
              <div className="w-8 h-5 bg-gray-200 rounded-sm flex items-center justify-center text-xs font-medium">
                PayPal
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
