import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: #152133;
    color: white;
    padding: 32px 0;
    font-family: "Muli";
    font-size: 1.4rem;
    text-align: center;
`;

const Footer = () => {
    return (
        <StyledFooter>&copy; NASA 2020</StyledFooter>
    )
}

export default Footer;