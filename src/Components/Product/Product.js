import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, image, name, price, description, min_order_quantity, available_quantity, per_unit_price } = product;
    const navigate = useNavigate();


    const navigateToUpdate = (id) => {
        navigate(`/tools/${id}`);
    };

    return (
        <div>
            <div id='tools' className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="tool" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <div className='text-left text-xl mb-5'>
                        <p className='card-text mb-6 leading-relaxed'>
                            {description?.slice(0, 80)}
                            {description?.length > 100 && (
                                <span title={`${description}`}>...read more</span>
                            )}
                        </p>
                        <p className='mb-1'>Minimum Order Quantity: 100</p>
                        <p className='mb-1'>Available Quantity: {available_quantity}</p>
                        <p className='card-text text-primary font-bold'>Price (per unit): ${per_unit_price}</p>
                    </div>
                    <div className="card-actions mt-auto">
                        <button
                            onClick={() => navigateToUpdate(_id)}
                            className="btn btn-primary flex mx-auto mt-4 text-white rounded"
                        >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;