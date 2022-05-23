import React from "react";

const Product = ({product}) => {
    const {_id, img, title, price, description} = product;

    return (
        <div>
            <div className="card w-full bg-base-100 px-4" key={_id}>
                <figure>
                    <img src={img} alt="" className="rounded-xl w-100" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text text-primary font-bold">${price}</p>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary flex mx-auto mt-4 text-white rounded px-6">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;