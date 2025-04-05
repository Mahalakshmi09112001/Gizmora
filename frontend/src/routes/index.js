import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Success from '../pages/Success';
import Cancel from '../pages/Cancel'
import Order from '../pages/OrderPage'
import FAQ from '../pages/FAQ';
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ShippingReturns from "../pages/ShippingReturns";
import HelpSupport from "../pages/HelpSupport";
import AddressPage from "../pages/AddressPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassowrd />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "product-category",
                element: <CategoryProduct />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'success',
                element: <Success />
            },
            {
                path: 'cancel',
                element: <Cancel />
            },
            {
                path: "search",
                element: <SearchProduct />
            },
            {
                path: "order",
                element: <Order />
            },


            {
                path: "about",
                element: <AboutUs /> // ✅ Add the AboutUs page here
            },
            {
                path: "contact", // ✅ Fixed spelling of Contact Us route
                element: <Contact />
            },
            {
                path: "faq",
                element: <FAQ />
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "shipping-returns",
                element: <ShippingReturns />,
            },
            {
                path: "help-support",
                element: <HelpSupport />,
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    }
                ]
            },
        ]
    }
])


export default router