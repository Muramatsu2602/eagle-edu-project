import React, {useState, useEffect} from "react";
import styled from "styled-components";

import landingPageEagle from '../../assets/eagle_landing_page.png'; // Tell Webpack this JS file uses this image

const DashboardWrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  min-height: 40vh;
  height: auto;
  margin: 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


function Home() {
  return (
    <div>
      <h1>Hello Boss</h1>
      <DashboardWrapper>
        <img src={landingPageEagle} alt="eagle from landing"/>
      </DashboardWrapper>
    </div>
  );
}

export default Home;
