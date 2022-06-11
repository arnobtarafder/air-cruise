import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../General/Loading/Loading";

const Purchase = () => {

  // state change
  const [quantity, setQuantity] = useState(0)
  console.log(quantity)

  const { id } = useParams()

  // user handel 
  const [user] = useAuthState(auth)
  // react hook form
  const { formState: { errors }, reset } = useForm();
  //  


  const { data: idWiseProduct, isLoading, refetch } = useQuery([id, 'products'], () =>
    fetch(`https://air-cruise.herokuapp.com/products/${id}`).then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(quantity, idWiseProduct.price)


  //   submit handel
  const submit = (event) => {
    event.preventDefault();
    const details = {
      email: event?.target?.email.value,
      productName: event.target.productName.value,
      order: event.target.order.value,
      totalPrice: event.target.totalPrice.value

    }
    if (details.order > idWiseProduct.minimum) {
      return (
        Swal.fire({
          icon: 'error',
          title: `Please add more than ${idWiseProduct.minimum} items`,

        })
      )
    }
    // console.log(event.target, event.target);

    fetch("https://air-cruise.herokuapp.com/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Products add done',

          })
          reset();
          refetch();
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Try again',

          })
          refetch()
        }

      })
  }

  return (
    <div className="mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px] mx-auto">
        <figure><img className='shrink-0' src={idWiseProduct.img} alt="Album" /></figure>
        <div className="card-body basis-2/3">
          <h2 className="card-title text-extrabold text-2xl font-serif"> {idWiseProduct.name} </h2>
          <p className='text-left'> {idWiseProduct.description} </p>
          <p className='text-left font-extrabold font-serif text-2xl mt-2'> price: $ {idWiseProduct.price} </p>
          <p className='text-left font-extrabold font-serif text-2xl mt-2'> minimumQuantity : {idWiseProduct.minimum} </p>
          <p className='text-left font-extrabold font-serif text-2xl mt-2'> in Stock : {idWiseProduct.available} </p>

          <form onSubmit={submit} >
            <input
              type="text"
              value={user?.email}
              readOnly
              className=" mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
              name='email'
              required
            />
            <input
              type="text"
              placeholder="Type your products name"
              readOnly
              value={idWiseProduct?.name}
              className="mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
              name='productName'

            />
            <input
              required
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Type your products quantity"
              className="mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
              min={idWiseProduct?.minimum}
              name='order'

            />
            <input
              type="totalPrice"
              value={+quantity * +idWiseProduct.price}
              placeholder="price"
              className="mt-3 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
              name='totalPrice'
              required
            />
            {console.log(+quantity * +idWiseProduct.price)}
            <input
              className='w-40 mt-4 className="w-full flex justify-center bg-primary  text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"'
              type="submit" />
          </form>
          {/* bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  */}

        </div>

      </div>
    </div>
  );
};

export default Purchase;
