import React from "react";
import Logo from "../Assets/nasa-logo.png";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #152133;
    height: 20vh;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`;

const NASALogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    margin-top: 40px;
    height: 100px;
`;

const PageTitle = styled.h1`
    font-size: 4rem;
    font-weight: 200;
`;

const Header = () => {
    return (
      <StyledHeader>
        <PageTitle>NASA's Astronomy Photo of the Day</PageTitle>
        <NASALogo className="App-logo" src={Logo} alt="NASA logo" />
      </StyledHeader>
    )
}

export default Header;