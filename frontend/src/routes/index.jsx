import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import AdminPanel from "../pages/AdminPanel/AdminPanel.jsx";
import AllUsers from "../pages/AllUsers/AllUsers.jsx";
import AllProducts from "../pages/AllProducts/AllProducts.jsx";
import CategoryPage from "../pages/CategoryPage/CategoryPage.jsx";
import ProductDetails from "../pages/ProductDetails/ProductDetails.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import SearchProduct from "../pages/SearchProduct/SearchProduct.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "forgot-password",
          element: <ForgotPassword/>
        },
        {
          path: "sign-up",
          element: <SignUp/>
        },
        {
          path: "product-category/:categoryName",
          element: <CategoryPage/>
        },
        {
          path: "product/:id",
          element: <ProductDetails/>
        },
        {
          path: "cart",
          element: <CartPage/>
        },
        {
          path: "search",
          element: <SearchProduct/>
        },
        {
          path: "admin-panel",
          element: <AdminPanel/>,
          children: [
            {
              path: "all-users",
              element: <AllUsers/>
            },
            {
              path: "all-Products",
              element: <AllProducts/>
            }
          ]
        },
      ]
    }
])

export default router