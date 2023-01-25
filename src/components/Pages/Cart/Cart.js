import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthProvider';
import CartProduct from './CartProduct/CartProduct';

const Cart = () => {

    const [checkout, setCheckout] = useState(0);

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: Products = [], isLoading, refetch } = useQuery({
        queryKey: ['cartProduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${email}`)
            const data = await res.json();
            return data;
        }
    })

    console.log(checkout);

    return (
        <div className=' grid grid-cols-4'>
            <div className='col-span-3'>
                {
                    Products.map(product => <CartProduct
                        key={product._id}
                        product={product}
                        refetch={refetch}
                        setCheckout={setCheckout}
                        chekout={checkout}
                    ></CartProduct>)
                }


            </div>
            <div className=' '>


            </div>

        </div>
    );
};

export default Cart;