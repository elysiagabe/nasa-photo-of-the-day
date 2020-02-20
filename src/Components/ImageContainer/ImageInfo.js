import React from "react";

const ImageInfo = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.caption}</p>
        </div>
    )
}

export default ImageInfo;