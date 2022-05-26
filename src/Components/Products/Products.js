import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";
import Loading from "../General/Loading/Loading";

const Products = () => {
  const [products] = useProducts();
  const [toggle, setToggle] = useState(false);


  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <div className="py-24 lg:px-12 font-mono">
        <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
          Our Awesome All <span className="text-primary">Products</span>
        </h1>

        <div className="flex justify-end items-center gap-5 my-5">
          {toggle ? (
            <p className="font-semibold">Show Less Products</p>
          ) : (
            <p className="font-semibold">Show All Products</p>
          )}
          <input
            type="checkbox"
            className="toggle toggle-lg"
            onChange={() => setToggle(!toggle)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto px-6 md:px-10 lg:px-20">
          {toggle ? (
            <>
              {
                products?.map(product => (<Product
                  key={product._id}
                  product={product}
                >
                </Product>
                ))}
            </>
          ) : (
            <>
              {
                products?.slice(-6)?.map(product => (<Product
                  key={product._id}
                  product={product}
                >
                </Product>
                ))}
            </>
          )

          }
      </div>
    </div>     
    </div >
  );
};

export default Products;