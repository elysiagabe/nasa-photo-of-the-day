import React from "react";

import styled from "styled-components";

const DateFormHeader = styled.h3`
    font-size: 2.4rem;
    font-family: 'Muli';
    font-weight: 200;
    text-align: center;
`;

const DatePickerForm = styled.form`
    margin-top: 20px;
    text-align: center;
`;

const DateLabel = styled.label`
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Muli';
    margin-right: 16px;

`;

const DateInput = styled.input`
    font-family: 'Muli';
    font-size: 1.8rem;
    color: #152133;
    padding: 8px;
`;



const ImageDatePicker = props => {
    //console.log("image date picker props are", props)
    //console.log(props.value);

    return (
        <>
         
        <DateFormHeader>Select a date to see a photo from a different day!</DateFormHeader>
        <DatePickerForm>
            <DateLabel>Date:</DateLabel>
            <DateInput type="date" value={props.value} onChange={e => props.setDate(e.target.value)} max={props.max}/>
        </DatePickerForm>
        
        </>
    );
}

export default ImageDatePicker;