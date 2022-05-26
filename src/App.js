import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import './App.css';
import Navbar from './Components/General/Navbar/Navbar';
import { css } from "@emotion/react";
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/General/Footer/Footer';
import SignIn from './Pages/Login';
import SignUp from './Pages/Registration';
import ResetPassword from './Components/Authentication/ResetPassword/ResetPassword';
import Portfolio from './Pages/Portfolio';
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from './Pages/Dashboard';
import MyProfile from './Components/Dashboard/USER/MyProfile/MyProfile';
import MyOrders from './Components/Dashboard/USER/MyOrders/MyOrders';
import AddReview from './Components/Dashboard/USER/AddReview/AddReview';
import MakeAdmin from './Components/Dashboard/ADMIN/MakeAdmin/MakeAdmin';
import Blog from './Pages/Blog';
import ContactUs from './Components/ContactUs/ContactUs';
import PrivateAuth from "./Components/Authentication/PrivateAuth/PrivateAuth"
import NotFound from './Components/General/NotFound/NotFound';
import RequireAdmin from './Components/Dashboard/RequireAdmin/RequireAdmin';
import AddProduct from './Components/Dashboard/ADMIN/AddProduct/AddProduct';
import ManageProduct from './Components/Dashboard/ADMIN/ManageProduct/ManageProduct';



const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;



function App() {

  useEffect(() => {
    AOS?.init();
  }, []);


  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };



  return (
    <div data-theme={theme && "night"} className="bg-base-100">

      {loading ? (
        <PulseLoader
          color={"#205493"}
          loading={loading}
          size={35}
          css={override}
        />
      ) : (
        <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      )}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/registration' element={<SignUp />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        {/* <Route path='/portfolio' element={<Portfolio />}></Route> */}
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        {/* <Route path='/contact' element={<ContactUs />}></Route> */}
        


        <Route
          path="/dashboard"
          element={
            <PrivateAuth>
              <Dashboard />
            </PrivateAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
           <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
