import React from 'react';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Components/General/Loading/Loading';

const Dashboard = () => {
   
    const [user, isLoading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);

  if(isLoading) {
      <Loading />
  }


    return (
        <div className='mt-[85px]'>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <div className="drawer-content px-6 lg:my-6">
                <div className="flex justify-between items-center">
                    <label
                        tabIndex="0"
                        htmlFor="dashboard"
                        className="btn lg:hidden btn-sm btn-visited"
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </label>
                    <h2 className="text-3xl font-bold border-b-4 border-primary lg:border-0">
                        Dashboard
                    </h2>
                </div>
                <Outlet />
            </div>
                {/* Nested ROUTE HANDEL*/}
                {/* <Outlet></Outlet> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-12 overflow-y-auto w-[200px] bg-[#232634] text-base-content">
                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/myProfile'>
                       My Profile </NavLink> </li>

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/users'> Make admin </NavLink> </li>}

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/manageProducts'> all products </NavLink> </li>}

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/manageOrders'> all orders </NavLink> </li>}                        

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/addProduct'> add Products </NavLink> </li>}

                       
                       {/* { !admin &&  <li><NavLink className="text-white font-bold uppercase" to='/dashboard/myOrders'>
                       My Orders </NavLink> </li>} */}
{/* 
                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/profile'> My Profile </NavLink> </li> */}

                        { !admin && <li><NavLink className="text-white font-bold uppercase" to='/dashboard/addReview'> Add a review </NavLink> </li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;