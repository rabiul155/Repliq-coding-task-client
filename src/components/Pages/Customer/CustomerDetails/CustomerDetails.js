import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CustomerDetails = () => {

    const [customer, setCustomer] = useState();

    const products = useLoaderData();
    const email = products[0]?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/customer/${email}`)
            .then(res => res.json())
            .then(data => {
                setCustomer(data);

            })

    }, [email])

    console.log(customer);


    return (
        <div>

            <div className="card card-compact w-96 lg:w-3/4 mx-auto bg-base-100 shadow-xl">
                <figure><img src={customer?.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl ">Customer Name : {customer?.name}</h2>
                    <h2 className="font-bold text-md ">Customer Email : {customer?.email}</h2>
                    <h2 className="font-bold text-md ">Customer UserId : {customer?._id}</h2>

                    <h2 className="font-bold text-md mb-6 ">Total Order : {products?.length} products</h2>


                    <table className="table table-zebra w-full">

                        <thead>
                            {/* <tr>
                                <th>Index</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Date</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            {
                                products?.map((product, idx) =>
                                    <tr
                                        key={product._id}
                                    >
                                        <th>{idx + 1}</th>
                                        <td>

                                            <div className="w-12 rounded">
                                                <img src={product?.picture} alt='' />
                                            </div>

                                        </td>
                                        <td>{product?.name}</td>
                                        <td>{product?.date}</td>
                                    </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>





        </div>
    );
};

export default CustomerDetails;