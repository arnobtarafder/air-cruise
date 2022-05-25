import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Components/General/Loading/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Loading />;
    }

    return (
        <div className="drawer drawer-mobile max-w-7xl h-screen mx-auto mt-24">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-6 lg:my-6">
                <div className="flex justify-between items-center">
                    <label
                        tabIndex="0"
                        htmlFor="dashboard-sidebar"
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
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-cool text-base-content">
                    <li className="my-1">
                        <NavLink to="/dashboard">My Profile</NavLink>
                    </li>
                    {!admin ? (
                        <>
                            <li className="my-1">
                                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to="/dashboard/addReview">Add a Review</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="my-1">
                                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;