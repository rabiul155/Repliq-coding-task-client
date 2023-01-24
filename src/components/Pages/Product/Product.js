import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Product = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)

            })
    }, [])
    return (

        <div className=' grid md:grid-cols-3 grid-cols-1 gap-4 m-4'>
            {
                product.map(pr => <ProductCard
                    key={pr._id}
                    product={pr}

                ></ProductCard>)
            }
        </div>
    );
};

export default Product;