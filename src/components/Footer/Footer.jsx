import React from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                Branding
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Design
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href="#">
                Terms of use
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
          <div className="flex gap-4">
            <a
              href="https://x.com/"
              target="_blank"
              className="bg-white text-[#0077B6] p-2 rounded-full shadow-md hover:bg-[#0077B6] hover:text-white transition"
              aria-label="X"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="bg-white text-[#0077B6] p-2 rounded-full shadow-md hover:bg-[#FF0000] hover:text-white transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="bg-white text-[#0077B6] p-2 rounded-full shadow-md hover:bg-[#3b5998] hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-white text-[#0077B6] p-2 rounded-full shadow-md hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white/80">
        © {new Date().getFullYear()} TradePort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
