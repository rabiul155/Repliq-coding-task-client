import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Customer = () => {


    const { setEmail } = useContext(AuthContext);

    const [users, setUser] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                setUser(data);

            })
    }, [])

    console.log(users);

    const handleClick = (email) => {
        console.log(email);
        setEmail(email)

    }

    return (

        <div>
            <h2 className=' text-4xl text-primary text-center m-4 font-bold'>All Customer</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) =>
                                <tr
                                    key={user._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>

                                        <div className="w-12 rounded">
                                            <img className=' rounded-full' src={user?.photo} alt='' />
                                        </div>

                                    </td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td><Link to={`/dashbord/customerDetails/${user?.email}`}><button onClick={() => handleClick(user?.email)} className=' btn btn-sm'>Details</button></Link></td>

                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customer;