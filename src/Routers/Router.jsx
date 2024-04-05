import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Men from "../Pages/Men/Men";
import Women from "../Pages/Woman/Women";
import Kids from "../Pages/Kids/Kids";
import Dashboard from "../Layouts/Dashboard";
import AddedProduct from "../DashboardPage/UserDashboard/AddedProduct";
import UserPanel from "../DashboardPage/UserDashboard/UserPanel";
import AllUsers from "../DashboardPage/AdminDashboard/AllUsers";
import ManageUsers from "../DashboardPage/AdminDashboard/ManageUsers";
import AddProduct from "../DashboardPage/AdminDashboard/AddProduct";
import ManageProduct from "../DashboardPage/AdminDashboard/ManageProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/men',
                element: <Men></Men>
            },
            {
                path: '/women',
                element: <Women></Women>
            },
            {
                path: '/kids',
                element: <Kids></Kids>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },

        ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [

            {
                path: 'userPanel',
                element: <UserPanel />
            },
            {
                path: 'addedProduct',
                element: <AddedProduct />
            },

            //Admin routs.................... 
            {
                path: 'allUsers',
                element: <AllUsers />
            },
            {
                path: 'manageUsers',
                element: <ManageUsers />
            },
            {
                path: 'addProduct',
                element: <AddProduct />
            },
            {
                path: 'manageProduct',
                element: <ManageProduct />
            }
        ]
    }
]);

export default router;