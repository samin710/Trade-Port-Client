import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthContext";
import { motion } from "framer-motion";
import signUpLottie from "../../assets/lottie/signupLottie.json";
import GradientText from "../../animations/GradientText/GradientText";
import Lottie from "lottie-react";

const SignUp = () => {
  const location = useLocation();
  const { createUsers, googleSignIn, setUser, update } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "TradePort | SignUp";
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const photo = formData.get("photo");

    const { email, password } = Object.fromEntries(formData.entries());

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase && !hasLowerCase && !isLongEnough) {
      setErrorMessage(
        "Password must include uppercase, lowercase letters, and be at least 6 characters long."
      );
      toast.error(
        "Password must include uppercase, lowercase letters, and be at least 6 characters long."
      );
      return;
    } else if (!hasUpperCase && !hasLowerCase) {
      setErrorMessage(
        "Password must include both uppercase and lowercase letters."
      );
      toast.error(
        "Password must include both uppercase and lowercase letters."
      );
      return;
    } else if (!hasUpperCase && !isLongEnough) {
      setErrorMessage(
        "Password must include an uppercase letter and be at least 6 characters long."
      );
      toast.error(
        "Password must include an uppercase letter and be at least 6 characters long."
      );
      return;
    } else if (!hasLowerCase && !isLongEnough) {
      setErrorMessage(
        "Password must include a lowercase letter and be at least 6 characters long."
      );
      toast.error(
        "Password must include a lowercase letter and be at least 6 characters long."
      );
      return;
    } else if (!hasUpperCase) {
      setErrorMessage("Password must include at least one uppercase letter.");
      toast.error("Password must include at least one uppercase letter.");
      return;
    } else if (!hasLowerCase) {
      setErrorMessage("Password must include at least one lowercase letter.");
      toast.error("Password must include at least one lowercase letter.");
      return;
    } else if (!isLongEnough) {
      setErrorMessage("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    } else {
      setErrorMessage("");
    }

    createUsers(email, password)
      .then((res) => {
        update({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Successfully created account");
            setUser({ ...res.user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn2 = () => {
    googleSignIn()
      .then((res) => {
        const data = res.user.email;
        toast.success(`Successfully signin to ${data}`);
        setUser({ ...res.user });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      <div className="md:py-10">
        {" "}
        <div className="flex justify-center items-center min-h-screen">
          <div
            className="card bg-base-100 md:w-3/9 w-5/6 shrink-0 shadow-2xl p-2"
            style={{ boxShadow: "0 0 50px rgba(0, 119, 182, .6)" }}
          >
            <div className="border border-secondary rounded-md">
              {" "}
              <div className="flex flex-col gap-2 md:pt-8 pt-4 items-center justify-center">
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
                  SignUp
                </GradientText>
                <div className="w-12 md:w-16 ">
                  <Lottie animationData={signUpLottie} loop></Lottie>
                </div>
              </div>
              <form onSubmit={handleSignUp} className="card-body">
                <fieldset className="fieldset">
                  <label className="label text-accent">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input focus:outline-none w-full focus:border-primary md:mb-2"
                    placeholder="Name"
                    required
                  />
                  <label className="label text-accent">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input focus:outline-none w-full focus:border-primary md:mb-2"
                    placeholder="Email"
                    required
                  />
                  <label className="label text-accent">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input focus:outline-none w-full focus:border-primary md:mb-2"
                    placeholder="Photo URL"
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
                  {<p className="text-red-600 font-medium">{errorMessage}</p>}
                  <button className="relative py-2 overflow-hidden font-medium text-primary  border border-primary rounded-l-full rounded-r-full shadow-inner group md:text-lg cursor-pointer">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-secondary group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-secondary group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300  bg-secondary group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-secondary  group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300  bg-primary opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300  group-hover:text-white ease">
                      SignUp
                    </span>
                  </button>
                  <fieldset className="fieldset border-primary rounded-box border p-4">
                    <legend className="fieldset-legend text-sm text-accent">
                      Other SignIn options
                    </legend>
                    <p
                      onClick={handleGoogleSignIn2}
                      className="btn btn-primary btn-outline w-full"
                    >
                      <FcGoogle size={24} /> SignIn with Google
                    </p>
                  </fieldset>
                  <p className="font-semibold text-center pt-4">
                    Already have an account?<span> </span>
                    <Link className="text-primary" to={"/signIn"}>
                      SignIn
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
