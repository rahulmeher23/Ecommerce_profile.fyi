import { createBrowserRouter } from "react-router-dom";
import Layout from "../appLayout/appLayout";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import OrderPage from "../pages/OrderPage";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthGuard from "../components/authGuard/AuthGuard";

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
        element: <Signup />
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