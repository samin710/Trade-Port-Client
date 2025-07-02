import React from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-primary dark:from-secondary to-secondary dark:to-base-100 px-6 py-12 md:mt-12 mt-5">
      <aside>
        <div className="md:w-20 w-16 ">
          {" "}
          <img
            src={logo}
            alt=""
            className="w-full rounded-md"
          />
        </div>
        <p className="">
          <span className="text-4xl font-bold">TradePort</span>
          <br />
          Providing reliable tech since 2025
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="flex gap-4">
          <a
            href="https://x.com/"
            target="_blank"
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-[#0077B6] hover:text-white transition dark:bg-base-100 dark:text-secondary dark:hover:bg-secondary dark:hover:text-base-100"
            aria-label="X"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-[#FF0000] hover:text-white transition dark:bg-base-100 dark:text-secondary dark:hover:text-base-100"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-[#3b5998] hover:text-white transition dark:bg-base-100 dark:text-secondary dark:hover:text-base-100"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-white transition dark:bg-base-100 dark:text-secondary dark:hover:text-base-100"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
