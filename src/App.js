import { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import './App.css';
import Navbar from './Components/General/Navbar/Navbar';
import { css } from "@emotion/react";



const override = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;



function App() {
  const [theme, setTheme] = useState(false);



  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };



  return (
    <div data-theme={theme && "night"}>
        <Navbar handleThemeChange={handleThemeChange} theme={theme} />
       </div>
  );
}

export default App;
