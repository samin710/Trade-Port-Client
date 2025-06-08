import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyProducts from "../pages/MyProducts/MyProducts";
import PrivateRoute from "../providers/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "myProducts",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "signIn",
    Component: SignIn,
  },
  {
    path: "signUp",
    Component: SignUp,
  },
]);
