import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import './App.css';
import Navbar from './Components/General/Navbar/Navbar';
import { css } from "@emotion/react";



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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };



  return (
    <div data-theme={theme && "night"}>

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



    </div>
  );
}

export default App;
