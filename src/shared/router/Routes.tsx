import Auth from "../../pages/auth";
import DashBoard from "../../pages/dashboard";
import Products from "../../pages/products";

export const ROUTES = [
    {
        path: "/",
        element: <DashBoard />
    },
    {
        path: "/authentication/*",
        element: <Auth />
    },
    {
        path: "/product/*",
        element: <Products />
    }
]