import React from "react";
import styled from "styled-components";

const APODImage = styled.img`
    width: 800px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 auto;
    display: block;
`;

const Image = props => {
    //console.log(props)
    return <APODImage alt="astronomy photo of the day" src={props.imgSrc}/>
}

export default Image;