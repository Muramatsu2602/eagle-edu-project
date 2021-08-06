import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import landingPageEagle from "../../assets/eagle_landing_page.png"; // Tell Webpack this JS file uses this image
import {
  Container,
  LogoWrapper,
  MainTitle,
  RedirectButton,
} from "./home-styling";

/**
 * TODO:
 * - Add personal information (to help pitch)
 * - Add Button to login page
 * - Add "made with love by @Muramatsu2602" on the bottom, like RGBWallet
 *
 */

function Home() {
  const history = useHistory(); // router

  return (
    <Container>
      <MainTitle>Eagle Education 2.0</MainTitle>
      <LogoWrapper>
        <img src={landingPageEagle} alt="eagle from landing" />
        <RedirectButton onClick={() => history.push("/login")}>
          Click Here to Start!
        </RedirectButton>
      </LogoWrapper>
    </Container>
  );
}

export default Home;
