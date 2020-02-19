import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image";
import ImageInfo from "./ImageInfo";

const ImageContainer = () => {

    //set state?
    const [imageData, setImageData] = useState({});

    //useEffect & axios call
    useEffect(() => {
       axios.get("https://api.nasa.gov/planetary/apod?api_key=TXxvHkpZZY4xeM6D1YJIencMwn9y1gJk9tHB5HLt")
       .then(response => {
           //console.log(response);
           //will probably update state here?
           setImageData(response.data);
       })
       .catch(error => {
           console.log("Error fetching data from space", error);
       })
    }, [])

 
    return (
        <div>
            <Image imgSrc={imageData.url}/>
            <ImageInfo 
                title={imageData.title} 
                date={imageData.date} 
                caption={imageData.explanation}
            />
        </div>
    )
}

export default ImageContainer;