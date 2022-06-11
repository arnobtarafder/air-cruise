import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../General/Loading/Loading';




const ManageOrders = () => {

    const { data: orders, isLoading } = useQuery('orders', () =>
        fetch('https://air-cruise.herokuapp.com/allorders').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="row mx-auto">
                <div className="col-md-12">

                    <div className="table-responsive">
                        <div className="main-card mb-3 card">
                            <div className="card-header"> Your Total orders is {orders.length}
                            </div>
                            <table className="align-middle mb-0 table table-bproductless table-striped table-hover mx-auto">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">quantity</th>
                                        <th className="text-center">Total Price</th>
                                        <th className="text-center">Action</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.length > 0 &&
                                        orders?.slice(0).reverse().map((product, index) =>

                                            <>

                                                <tr>
                                                    <td className="text-center text-muted">{index + 1} </td>
                                                    <td className="text-center"> {product?.name} </td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">

                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">
                                                                        {product?.email}  </div>
                                                                    <div className="widget-subheading opacity-7">  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center"> {product?.order} </td>
                                                    <td className="text-left"> ${product?.totalPrice} </td>

                                                    <td className="text-center">
                                                        <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
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

export default ManageOrders;