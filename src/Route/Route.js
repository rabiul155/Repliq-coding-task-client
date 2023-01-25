import AddProduvt from "../components/Pages/AddProduct/AddProduvt";
import Cart from "../components/Pages/Cart/Cart";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Product from "../components/Pages/Product/Product";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import SignUp from "../components/Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/item/:_id',
                loader: ({ params }) => fetch(`http://localhost:5000/item/${params._id}`),

                element: <ProductDetails></ProductDetails>
            },
            {
                path: 'addProduct',
                element: <AddProduvt></AddProduvt>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }

        ]
    }
])