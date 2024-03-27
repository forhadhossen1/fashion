import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children : [
            {
                path : '/',
                element : 'hello world'
            }
        ]

    },
]);

export default router;