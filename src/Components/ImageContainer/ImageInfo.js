import React from "react";
import styled from "styled-components";

const ImageInfoCard = styled.div`
    width: 800px;
    background-color: #152133;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto 20px;
    padding-bottom: 20px;
`;

const ImageTitle = styled.h2`
    font-size: 3.2rem;
    font-family: 'Muli';
    font-weight: 200;
    margin: 0;
    padding-bototm: 0;
`;

const DateSubtitle = styled.h3`
    font-family: 'Muli';
    font-size: 2rem;
    margin-bottom: 0;
`;

const ImageCaption = styled.p`
    font-family: 'Muli';
    font-size: 1.4rem;
    text-align: left;
`;

const ImageInfo = props => {
    return (
        <ImageInfoCard>
            <ImageTitle>{props.title}</ImageTitle>
            <DateSubtitle>{props.date}</DateSubtitle>
            <ImageCaption className="leading-relaxed">{props.caption}
            </ImageCaption>
            <p className="text-center">Testing TailWind</p>
        </ImageInfoCard> 
        
    )
}

export default ImageInfo;