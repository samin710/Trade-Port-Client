import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyProducts from "../pages/MyProducts/MyProducts";
import PrivateRoute from "../providers/PrivateRoute";
import Cart from "../pages/Cart/Cart";
import Categories from "../pages/Categories/Categories";
import CategoryWiseProducts from "../pages/CategoryWiseProducts/CategoryWiseProducts";
import Update from "../pages/Update/Update";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path: "categories",
        Component: Categories,
      },
      {
        path: "categoryWiseProducts/:category",
        Component: CategoryWiseProducts,
      },
      {
        path: "productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
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
        path: "update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
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
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "aboutUs",
        Component: AboutUs,
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
  {
    path: "*",
    Component: ErrorPage,
  },
]);
