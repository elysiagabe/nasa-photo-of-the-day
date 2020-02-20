import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image";
import ImageInfo from "./ImageInfo";
import ImageDatePicker from "./ImageDatePicker"
import "./ImageContainer.css";

const ImageContainer = () => {
    const d = new Date();
    let today = d.toISOString().split('T', 1)[0];
    //console.log(today);
    // console.log(d);
    // console.log(date);

    //set state?
    const [imageData, setImageData] = useState({});
    // stretch: date state
    const [date, setDate] = useState(today);

    //useEffect & axios call

    // useEffect(() => {
    //    axios.get(`https://api.nasa.gov/planetary/apod?api_key=TXxvHkpZZY4xeM6D1YJIencMwn9y1gJk9tHB5HLt&date=${date}`)
    //    .then(response => {
    //        console.log(response.data);
    //        //will probably update state here?
    //        setImageData(response.data);
    //    })
    //    .catch(error => {
    //        console.log("Error fetching data from space", error);
    //    })
    // }, [date])

 
    return (
        <div className="Image-container">
            <Image imgSrc={imageData.url}/>
            <ImageInfo 
                title={imageData.title} 
                date={imageData.date} 
                caption={imageData.explanation}
            />
            <ImageDatePicker value={date} setDate={setDate} max={today}/>
        </div>
    )
}

export default ImageContainer;