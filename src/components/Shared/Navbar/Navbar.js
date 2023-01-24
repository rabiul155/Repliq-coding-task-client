import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {

    const { currentUser, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const navLink =
        <>
            <Link to='/product'><li>Product List</li></Link>
            <Link><li>Item 2</li></Link>
            <Link><li>Item 3</li></Link>
        </>

    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">REPLIQ</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        currentUser ?
                            <>
                                <Link onClick={() => handleLogOut()}>LogOut</Link>
                            </>
                            :
                            <>
                                <Link to='/login'>LogIn</Link>
                                <Link to='/signup'>SignUp</Link>

                            </>

                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;