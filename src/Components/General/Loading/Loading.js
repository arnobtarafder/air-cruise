import React from 'react';
import { PulseLoader } from 'react-spinners';
import { css } from "@emotion/react";



const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;




const Loading = () => {
    
    return (
        <div>
            <PulseLoader
                color={"#205493"}
                size={35}
                css={override}
            />
        </div>
    );
};

export default Loading;