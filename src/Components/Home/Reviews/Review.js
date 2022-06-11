import React, { Fragment } from "react";
import Rating from 'react-rating';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "react-query";
import Loading from "../../General/Loading/Loading";

const Review = () => {
  const testimonials = [
    {
      name: "Nash Patrik",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 1.0
    },
    {
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 4.9
    },
    {
      name: "Bria Malone",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 3.0
    },
    {
      name: "Nash Patrik",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 5.0
    },
    {
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 4.8
    },
    {
      name: "Bria Malone",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 3.7
    },
    {
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      rate: 2.0
    },
  ];

  const { data: reviews, isLoading } = useQuery('reviews', () =>
  fetch('https://air-cruise.herokuapp.com/reviews', {
    method: "GET",
    // headers: {
    //   'authorization': `Bearer ${localStorage.getItem("accesstoken")}`
    // }
  })
    .then(res => res.json()
    )
)

if (isLoading) {
  return <Loading></Loading>
}

  return (
    <Fragment>
      <div className="py-24 lg:px-24">
        <h1 className="text-3xl lg:text-4xl text-center font-bold pb-28">
          Our Clients Feedback!!!
        </h1>
        <Swiper
          style={{ paddingBottom: "4.5rem" }}
          autoplay={true}
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
        >
          { reviews?.slice(0).reverse().map(({ image, name, title, text, rate, qoute, from, img, value }, index) => {
            return (
              <SwiperSlide
                className="card w-full bg-base-100 shadow-xl px-6 rounded-md"
                key={index}
              >
                <div className="flex items-center content-center gap-4 mx-auto mr-28">
                  <div>
                    <img src={img} alt="Shoes" className="rounded-xl w-16" />
                  </div>
                  <div>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title font-light ">{qoute}</h2>
                    <h2 className="card-title font-light pt-8">location: {from}</h2>
                  </div>
                </div>
                <div className="card-body items-center text-start px-6">
                  <p>{text}</p>
                  <div className="flex mr-48">
                    <p>
                      <Rating style={{ fontSize: '1rem', marginLeft: '5px' }} initialRating={value} emptySymbol={<ImStarEmpty style={{ color: '#fdde6c' }} />}
                        fullSymbol={<ImStarFull style={{ color: '#fdde6c' }} />} readonly>
                      </Rating>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Review;