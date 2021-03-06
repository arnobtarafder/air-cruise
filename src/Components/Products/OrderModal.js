import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import auth from "../../firebase.init";
import Loading from "../General/Loading/Loading";

const OrderModal = ({product, setOrder}) => {
    const navigate = useNavigate()
    const [user, loading]= useAuthState(auth)
    const handlePlaceOrder = e=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pickupLocation = e.target.location.value;
        const productName = e.target.productName.value;
        const orderQuantity = e.target.orderQuantity.value;
        const minimumOrder = product?.minimumOrder;
        const availableQuantity = product?.availableQuantity;
        const img = product?.img
        const price = product?.price;

        //create an order formet
        const order = {
            name, email, pickupLocation, productName, orderQuantity, paid: false, price,img
        }

        if(parseInt(orderQuantity) < parseInt(minimumOrder)){
            toast.error(`Please! Place an order minimum ${minimumOrder} pcs`)
        }
        else if(parseInt(orderQuantity) > parseInt(availableQuantity)){
            toast.error(`Sorry! We have only ${availableQuantity} pcs`)
        }

        if(parseInt (orderQuantity) > parseInt(minimumOrder) && parseInt(orderQuantity) < parseInt(availableQuantity)){
            fetch('https://whispering-plains-56325.herokuapp.com/order', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body:JSON.stringify(order)
            })
            .then(res=> {
                return res.json();
            })
            .then(data=> {
                if(data.acknowledged){
                    toast.success("successfully placed order!")
                    setOrder("");
                    navigate('/')
                }
            })
            
        }

    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                    <h3 className="text-xl">Please Provide information for Order</h3>
                    <form onSubmit={handlePlaceOrder}>
                    <input type="text" name="name" value={user?.displayName} className="input input-bordered w-full" readOnly />
                    <input type="text" name="email" value={user?.email} className="input input-bordered w-full my-3" readOnly />
                    <input type="text" name="location" placeholder="Enter your pickup location" className="input input-bordered w-full my-3"  />
                    <input type="text" name="productName" value={product?.name} className="input input-bordered w-full mb-3" readOnly />
                    <input type="number" name="orderQuantity"  placeholder={`Minimum order ${product?.minimum}`} className="input input-bordered w-full mb-3" />
                    <input type="submit" value="Place Order" className="btn btn-primary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
