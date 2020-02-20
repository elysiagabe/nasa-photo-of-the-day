import React from "react";

const ImageDatePicker = props => {
    console.log("image date picker props are", props)
    console.log(props.value);
    
    return (
        <>
        <h3>Select a date to see a photo from a different day!</h3>
        <form>
            <label>Date:</label>
            <input type="date" value={props.value} onChange={e => props.setDate(e.target.value)} max={props.max}/>
        </form>
        </>
    );
}

export default ImageDatePicker;