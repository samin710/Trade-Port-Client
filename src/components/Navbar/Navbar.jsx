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
      <div className="navbar my-3 md:my-8 rounded-lg shadow-md shadow-secondary ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Categories</NavLink>
              </li>
              <li>
                <NavLink to={"/allProducts"}>All products</NavLink>
              </li>
              <li>
                <NavLink to={"/addProduct"}>Add Product</NavLink>
              </li>
              <li>
                <NavLink to={"/myProducts"}>My products</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              {user ? (
                <div className="p-2 rounded-lg text-center bg-secondary cursor-pointer">
                  <button onClick={handleLogout}>SignOut</button>
                </div>
              ) : (
                <div className="">
                  <li>
                    <NavLink to={"/signIn"}>SignIn</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/signUp"}>SignUp</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="md:w-12 w-10 ">
              <img
                src={logoImg}
                alt="Logo"
                className="w-full rounded-md mx-auto border border-primary"
              />
            </div>
            <p className="hidden md:block text-xl md:text-2xl">TradePort</p>
          </div>
        </div>
        <div className="navbar-center bg-secondary rounded-4xl px-4 hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium "
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allProducts"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium "
                }
              >
                All products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/addProduct"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium "
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/myProducts"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium "
                }
              >
                My products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive
                    ? " text-primary font-medium border-b-4 border-b-primary "
                    : " font-medium "
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ThemeToggle></ThemeToggle>
        </div>
        <div className="navbar-end hidden md:flex">
          {user ? (
            <div className="relative menu-horizontal gap-3">
              {/* Avatar Button */}
              <div id="clickable">
                <button>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
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
                  className="w-full border-primary border text-center rounded-md px-4 py-2 text-sm bg-primary cursor-pointer"
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
                    : "border-b-4 border-b-primary border-secondary text-primary font-medium btn "
                }
                to={"/signIn"}
              >
                SignIn
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white font-medium btn "
                    : "border-b-4 border-b-primary border-secondary text-primary font-medium btn "
                }
                to={"/signUp"}
              >
                SignUp
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
