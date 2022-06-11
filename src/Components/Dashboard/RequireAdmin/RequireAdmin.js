import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../General/Loading/Loading";


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [admin, adminLoading] = useAdmin(user);
  
    if (loading || adminLoading) {
      return <Loading></Loading>;
    }
  
    if (!admin || !user) {
      signOut(auth);
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  };
  
  export default RequireAdmin;
  