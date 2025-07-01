import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import { toast } from "react-toastify";
import logoImg from "../../assets/logo.png";
import { Tooltip } from "react-tooltip";
import Loading from "../Loading/Loading";
import ThemeToggle from "../DarkModeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logout, loading } = use(AuthContext);

  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully SignOut");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <>
      <div className="navbar my-5 md:my-12 rounded-lg shadow-md shadow-secondary border border-secondary dark:border-secondary/30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border dark:border-secondary border-primary space-y-2"
            >
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/"}>Home</NavLink>
              </div>
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/categories"}>Categories</NavLink>
              </div>
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/allProducts"}>All products</NavLink>
              </div>
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/addProduct"}>Add Product</NavLink>
              </div>
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/myProducts"}>My products</NavLink>
              </div>
              <div className="p-2 rounded-lg text-center dark:border-secondary border-primary border cursor-pointer">
                <NavLink to={"/cart"}>Cart</NavLink>
              </div>
              {user ? (
                <div className="p-2 rounded-lg text-center bg-secondary cursor-pointer">
                  <button onClick={handleLogout}>SignOut</button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-2 rounded-lg text-center bg-secondary cursor-pointer">
                    <NavLink to={"/signIn"}>SignIn</NavLink>
                  </div>
                  <div className="p-2 rounded-lg text-center bg-secondary cursor-pointer">
                    <NavLink to={"/signUp"}>SignUp</NavLink>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="md:w-12 w-10 ">
              <img
                src={logoImg}
                alt="Logo"
                className="w-full rounded-md mx-auto border border-primary dark:border-secondary"
              />
            </div>
            <p className="hidden md:block text-xl md:text-2xl">TradePort</p>
          </div>
        </div>
        <div className="navbar-center bg-secondary rounded-4xl px-4 hidden lg:flex transition-all duration-500 ease-in-out">
          <ul className="menu menu-horizontal px-1 gap-8 items-center p-4">
            <div>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium"
                }
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium "
                }
              >
                Categories
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/allProducts"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium "
                }
              >
                All products
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/addProduct"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium "
                }
              >
                Add Product
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/myProducts"}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium"
                }
              >
                My products
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary dark:border-b-base-100 dark:text-base-100 py-1"
                    : " font-medium "
                }
              >
                Cart
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="hidden lg:flex lg:ml-5">
          <ThemeToggle></ThemeToggle>
        </div>
        <div className="navbar-end hidden md:flex">
          <div className="lg:hidden mr-4">
            <ThemeToggle></ThemeToggle>
          </div>
          {user ? (
            <div className="relative menu-horizontal gap-3">
              {/* Avatar Button */}
              <div
                id="clickable"
                className=" flex justify-between items-center rounded-full"
              >
                <button>
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User Avatar"
                  />
                </button>
              </div>
              <Tooltip
                className="space-y-2 z-50"
                anchorSelect="#clickable"
                clickable
              >
                <p>{user.displayName}</p>
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="w-full border-primary text-center rounded-md px-4 py-2 text-sm bg-primary dark:bg-secondary cursor-pointer"
                >
                  Logout
                </button>
              </Tooltip>
            </div>
          ) : (
            <div className="menu-horizontal gap-3">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white font-medium btn "
                    : "border-b-4 btn-primary dark:btn-secondary btn-outline border-b-primary dark:border-b-secondary dark:text-secondary border-secondary dark:hover:text-base-100 font-medium btn"
                }
                to={"/signIn"}
              >
                SignIn
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white font-medium btn "
                    : "border-b-4 btn-primary dark:btn-secondary btn-outline border-b-primary dark:border-b-secondary dark:text-secondary border-secondary dark:hover:text-base-100 font-medium btn"
                }
                to={"/signUp"}
              >
                SignUp
              </NavLink>
            </div>
          )}
        </div>
        <div className="navbar-end md:hidden">
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </>
  );
};

export default Navbar;
