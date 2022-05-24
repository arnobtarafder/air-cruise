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



const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;



function App() {
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

        
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
