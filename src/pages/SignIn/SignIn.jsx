import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthContext";
import { motion } from "framer-motion";
import GradientText from "../../animations/GradientText/GradientText";
import signInLottie from "../../assets/lottie/signinLottie.json";
import Lottie from "lottie-react";

const SignIn = () => {
  const { signin, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "TradePort | SignIn";
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signin(email, password)
      .then((res) => {
        const data = res.user.email;
        toast.success(`Successfully signed in as ${data}`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const data = res.user.email;
        toast.success(`Successfully signin to ${data}`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const currentTheme =
    localStorage.getItem("theme") ||
    document.documentElement.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");


  const cardShadow =
    currentTheme === "dark"
      ? "0 0 40px rgba(255, 50, 140, 0.6)"
      : "0 0 40px rgba(0, 119, 182, .6)"; 

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div
            className="card  md:w-3/9 w-5/6 shrink-0 shadow-2xl p-2"
            style={{ boxShadow: cardShadow }}
          >
            <div className="border border-secondary rounded-md">
              {" "}
              <div className="flex flex-col gap-2 md:pt-8 pt-4 items-center justify-center ">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#0077B6",
                  ]}
                  animationSpeed={5}
                  showBorder={false}
                  className="custom-class md:text-4xl text-2xl"
                >
                  SignIn
                </GradientText>
                <div className="w-12 md:w-16 ">
                  <Lottie animationData={signInLottie} loop></Lottie>
                </div>
              </div>
              <form onSubmit={handleSignIn} className="card-body pt-2 md:pt-5">
                <fieldset className="fieldset">
                  <label className="label text-accent">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input focus:outline-none w-full focus:border-primary md:mb-2"
                    placeholder="Email"
                    required
                  />
                  <label className="label text-accent">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input focus:outline-none w-full focus:border-primary mb-1 md:mb-2"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <p className="link link-hover">Forgot password?</p>
                  </div>
                  <button className="relative py-2 overflow-hidden font-medium text-primary dark:text-secondary  border border-primary dark:border-secondary rounded-l-full rounded-r-full shadow-inner group md:text-lg cursor-pointer">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-secondary group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-secondary group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300  bg-secondary group-hover:h-full ease dark:bg-base-100"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-secondary dark:bg-base-100  group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300  bg-primary dark:bg-secondary opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 dark:group-hover:text-base-100  group-hover:text-white ease">
                      SignIn
                    </span>
                  </button>
                  <fieldset className="fieldset border-primary dark:border-secondary rounded-box border p-4">
                    <legend className="fieldset-legend text-sm text-accent">
                      Other SignIn options
                    </legend>
                    <p
                      onClick={handleGoogleSignIn}
                      className="btn btn-primary btn-outline dark:btn-secondary w-full"
                    >
                      <FcGoogle size={24} /> SignIn with Google
                    </p>
                    <p className="btn btn-outline btn-primary dark:btn-secondary w-full">
                      <FaGithub size={24} className="text-black" /> SignIn with
                      Github
                    </p>
                  </fieldset>
                  <p className="font-semibold text-center pt-4">
                    Don't have an account?<span> </span>
                    <Link
                      className="text-primary dark:text-secondary"
                      to={"/signUp"}
                    >
                      SignUp
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SignIn;
