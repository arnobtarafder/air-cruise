import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import auth from "../../../../firebase.init";

const MyOrders = () => {
     
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    // state handel
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        console.log(email);
        if (user) {
            fetch(`https://air-cruise.herokuapp.com/orders?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))

        }
    }, [user, navigate])




    const deleteOrder = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `https://air-cruise.herokuapp.com/orderpro/${id}`
                console.log(url, "delete");
                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'deleted done',
                                text: ` deleted products ${id}`
                            })

                        }  
                        const deleted = orders.filter(del => del._id !== id )
                        setOrders(deleted)
                        console.log(data)
                    })

            }
        })

    }



    console.log(orders);

    return (
        <div className='mt-10'>

            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header"> Your Total orders is {orders?.length}
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-focus">Email</button>
                                    <button className="btn btn-focus"> Your Products</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Email</th>
                                        <th className="text-center">products Name</th>
                                        <th className="text-center">order cancel</th>
                                        <th className="text-center">Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.length > 0 &&
                                        orders?.slice(0).reverse().map((order, index) =>

                                            <>

                                                <tr>
                                                    <td className="text-center text-muted">{index + 1} </td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">

                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">
                                                                        {order?.email}  </div>
                                                                    <div className="widget-subheading opacity-7">  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center"> {order?.productName} </td>
                                                    <td className="text-center">

                                                       <button onClick={()=> deleteOrder(order?._id) } className='btn btn-primary btn-sm'> Cancel</button>
                                         
                                                    </td>


                                                    <td className="text-center">
                                                        <NavLink to={`/dashboard/payment/${order?._id}`} className="btn btn-primary btn-sm" >pay</NavLink>
                                         
                                                    </td>
                                                    
                                                </tr>

                                            </>

                                        )
                                    }



                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrders;
