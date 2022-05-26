import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1WOxExHA91h6rBvSjs8D3NPt6Bx9ZQFfhUUX7OKUtwSgu4wW9269Otw6e91xEdCUT1offSz6jnFjG4d7qlXyq500K9fE8xGW');


const Payment = () => {
    const { id } = useParams();
    const url = `https://zipgrip-tooling.herokuapp.com/tools/${id}`;

    const { data: appointment, isLoading } = useQuery(["booking", id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mx-auto'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success'>Hello, {appointment?.patientName}</p>
                    <h2 className="card-title">Pay for: {appointment?.treatment}</h2>
                    <p>Your appointment: <span className='text-orange-700'>{appointment?.date} </span> at {appointment?.slot}</p>
                    <p>Please pay: ${appointment?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;