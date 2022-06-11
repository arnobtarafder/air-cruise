import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../General/Loading/Loading";
import Swal from 'sweetalert2';


const ManageProducts = () => {

  const { data: products, isLoading, refetch } = useQuery('products', () =>
    fetch('https://air-cruise.herokuapp.com/products').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <Loading></Loading>
  }


  //   deleting handel
  //    const delet = (id) => {
  //        const delet = Swal.fire({
  //         icon: 'question',
  //         title: 'are you sure ?',
  //         text: '',
  //     })
  //        if(delet){
  //         const url = `https://thawing-beach-36415.herokuapp.com/products/${id}`
  //         console.log(url);
  //         fetch(url,{
  //             method : "DELETE"
  //         })
  //         .then(res=> res.json())
  //         .then(data => {
  //             if(data.deletedCount > 0 ){
  //                 Swal.fire({
  //                     icon: 'success',
  //                     title: 'deleted done',
  //                     text: ` deleted products ${id}` 
  //                 })

  //             }
  //             refetch()

  //             console.log(data)
  //         })
  //        }


  //    }

  const handleDelete = id => {

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

        const url = `https://air-cruise.herokuapp.com/products/${id}`
        console.log(url);
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
            refetch()

            console.log(data)
          })

      }
    })

  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="main-card mb-3 card">
            <div className="table-responsive mx-auto">
            <div className="card-header">Total products: {products.length}
      
            </div>
              <table className="align-middle mb-0 table table-bproductless table-striped table-hover mx-auto">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th className="text-center">price</th>
                    <th className="text-center">available</th>
                    <th className="text-center">minimum quantity</th>
                    <th className="text-center">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {products.length > 0 &&
                    products?.slice(0).reverse().map((product, index) =>

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
                                    {product?.name}  </div>
                                  <div className="widget-subheading opacity-7">  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-left"> ${product?.price} </td>
                          <td className="text-center"> {product?.available} </td>
                          <td className="text-center"> {product?.minimum} </td>

                          <td className="text-center">
                            <button
                              onClick={() => handleDelete(product?._id)} type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Delete</button>
                          </td>
                        </tr>

                      </>

                    )
                  }



                </tbody>
              </table>
            </div>
            {/* <div className="d-block text-center card-footer">
                      <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                      <button className="btn-wide btn btn-success">Save</button>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
