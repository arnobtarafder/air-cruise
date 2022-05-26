import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../General/Loading/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
    const [openModal, setOpenModal] = useState(false);
    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState("")
    const [user, isLoading] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        // signOut(auth);
                        // localStorage.removeItem('accessToken');
                        // navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    const { refetch } = useQuery("userOrders", () => fetch(`http://localhost:5000/orders/${user?.email}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    const startOrderCancleProcessing = id => {
        setOpenModal(true);
        setOrderId(id)

    }

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All Orders in one place {orders?.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((product, index) => <tr className="text-center">
                                <td>{index + 1}</td>
                                <td><img src={product.img} className="w-16" alt="" /></td>
                                <td>{product.productName}</td>
                                <td>{product.paid ? <button className="btn btn-xs btn-success" disabled>Paid</button> : <Link to={`/dashboard/payment/${product._id}`}><button className="btn btn-xs btn-primary text-white">Pay</button></Link>}</td>
                                <td>{product.paid ? <button className="btn btn-accent btn-sm text-white" disabled>Shipping</button> : <label htmlFor="cancleConfirmation" className="btn btn-xs btn-error text-white modal-button" onClick={() => startOrderCancleProcessing(product?._id)}>Cancle</label>}</td>
                            </tr>)

                        }
                    </tbody>

                    {
                        openModal && <DeleteOrderModal refetch={refetch} orderId={orderId} setOpenModal={setOpenModal} />
                    }
                </table>

            </div>
        </div>
    );
};

export default MyOrders;
