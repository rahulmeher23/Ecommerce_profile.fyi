import { createBrowserRouter } from "react-router-dom";
import Layout from "../appLayout/appLayout";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import OrderPage from "../pages/OrderPage";

export const appRouter = createBrowserRouter([
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