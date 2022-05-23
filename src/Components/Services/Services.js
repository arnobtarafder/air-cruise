import React from "react";


const Services = () => {
  const [services] = useServices();

  return (
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome All <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-20">
        {services.map(({ _id, img, title, description, price }) => (
          <div className="card w-full bg-base-100 px-4 shadow-lg" key={_id}>
            <figure>
              <img src={img} alt="" className="rounded-xl w-100" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p className="card-text text-primary font-bold">${price}</p>
              <p className="card-text">
                {description?.slice(0, 80)}
                {description?.length > 100 && (
                  <span title={`${description}`}>...read more</span>
                )}
              </p>
              <button className="btn btn-primary flex mx-auto mt-4 text-white rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;