import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();

  return (
    <div>
      <div className="py-24 lg:px-12 font-mono">
        <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
          Our Awesome All <span className="text-primary">Products</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-6 md:px-10 lg:px-20">
          {products?.map(product => <Product
            key={products._id}
            product={product}
          >
          </Product>)}
        </div>
      </div>


      <Link to="/all-products">
        <button className="btn btn-primary flex mx-auto mt-16 text-white rounded px-10">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default Products;