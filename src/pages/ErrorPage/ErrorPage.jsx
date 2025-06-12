import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import error1 from "../../assets/lottie/error1.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-secondary to-white">
      <div className="text-center space-y-8 flex flex-col items-center">
        <Lottie animationData={error1} loop />
        <h1 className="text-5xl font-bold text-error">404 - Not Found</h1>
        <p className="text-lg text-accent">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn btn-primary flex items-center justify-center gap-2">
            <FaArrowLeft />
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
