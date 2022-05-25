import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../General/Loading/Loading";
import { useQuery } from "react-query";
import InternetError from "../../General/InternetError/InternetError";


const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);


  const { isLoading, error, data: userFromDb } = useQuery('userFromDb', () =>
      fetch(`https://tools-manufacturer.herokuapp.com/user/${user.email}`, {
          method: 'GET',
          headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      }).then(res => {
          if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem('accessToken');
              navigate('/login');
          }
          return res.json()
      }
      )
  );

  if (loading || isLoading || adminLoading) {
      return <Loading />
  };

  if (error) {
      return <InternetError />
  };


  if (!user || !admin) {
      signOut(auth);
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }

  
  return children;
};

export default RequireAdmin;