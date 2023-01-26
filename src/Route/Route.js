import AddCustomer from "../components/AddCustomer/AddCustomer";
import AddProduvt from "../components/Pages/AddProduct/AddProduvt";
import Cart from "../components/Pages/Cart/Cart";
import Customer from "../components/Pages/Customer/Customer";
import CustomerDetails from "../components/Pages/Customer/CustomerDetails/CustomerDetails";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import OrderList from "../components/Pages/OrderList/OrderList";
import Product from "../components/Pages/Product/Product";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import ProductList from "../components/Pages/ProductList/ProductList";
import SignUp from "../components/Pages/SignUp/SignUp";
import Dashbord from "../layout/Dashbord";

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
                path: '/cart',
                element: <Cart></Cart>
            }

        ]

    },
    {
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: '/dashbord',
                element: <AddProduvt></AddProduvt>
            },
            {
                path: '/dashbord/orders',
                element: <OrderList></OrderList>
            },
            {
                path: '/dashbord/products',
                element: <ProductList></ProductList>
            },
            {
                path: '/dashbord/customers',
                element: <Customer></Customer>
            },
            {
                path: '/dashbord/customerDetails/:email',
                loader: ({ params }) => fetch(`http://localhost:5000/customerDetails?email=${params.email}`),
                element: <CustomerDetails></CustomerDetails>
            },

            {
                path: '/dashbord/addCustomers',
                element: <AddCustomer></AddCustomer>
            }
        ]
    }
])