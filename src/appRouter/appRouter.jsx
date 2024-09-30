import { createBrowserRouter } from "react-router-dom";
import Layout from "../appLayout/appLayout";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import OrderPage from "../pages/OrderPage";
import PageNotFound from "../pages/PageNotFound";
import AuthGuard from "../components/authGuard/AuthGuard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Signup2 from "../pages/auth/Signup2";

export const appRouter = createBrowserRouter([
    {
        path: '*',
        element: <PageNotFound />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        // element: <Signup />
        element: <Signup2 />
    },
    {
        path: '',
        element: <Layout />,
        children: [
            {
                index: '1',
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <ProductsList />
            },
            {
                path: "product/:id",
                element: <ProductDescription />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "payment-successful",
                element: <OrderPage />
            }
        ]
    }
])