import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image";
import ImageInfo from "./ImageInfo";

const ImageContainer = () => {
    return (
        <div>
        <Image />
        <ImageInfo />
        </div>
    )
}

export default ImageContainer;