import React from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Services = () => {
  const [products] = useProducts();

  return (
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome All <span className="text-primary">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-20">
      {products.map(product => <Product
        key={products._id}
        product={product}
        >
        </Product>)}
      </div>
    </div>
  );
};

export default Services;