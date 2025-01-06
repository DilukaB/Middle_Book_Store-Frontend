import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import TopSellers from "../pages/home/TopSellers";
import Recommended from "../pages/home/Recommended";
import AboutUs from "../pages/books/AboutUs";
import Contact from "../pages/books/Contact";
import Terms from "../pages/books/Terms";
import Policy from "../pages/books/Policy";
import BookDetails from "../pages/books/BookDetails";





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: < Home />,
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage /></PrivateRoute>
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/Ts",
                element: <TopSellers />
            },
            {
                path: "/Fs",
                element: <Recommended />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/policy",
                element: <Policy />
            },
            {
                path: "/book-details/:bookName",
                element: <BookDetails />
            },

        ]

    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "/dashboard",
        element: <AdminRoute> <DashboardLayout /> </AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard /></AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute> <AddBook /> </AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute> <UpdateBook /> </AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute> <ManageBooks /> </AdminRoute>
            }

        ]
    }
]);


export default router;