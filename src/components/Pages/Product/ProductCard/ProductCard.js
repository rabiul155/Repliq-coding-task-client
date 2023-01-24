import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { price, _id, name, about, picture } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Pirce : {price}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/item/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;