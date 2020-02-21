import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image";
import ImageInfo from "./ImageInfo";
import ImageDatePicker from "./ImageDatePicker"
import styled from "styled-components";

const MainSection = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #152133;
    color: #fff;
    padding: 60px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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

    useEffect(() => {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=TXxvHkpZZY4xeM6D1YJIencMwn9y1gJk9tHB5HLt&date=${date}`)
       .then(response => {
           console.log(response.data);
           //will probably update state here?
           setImageData(response.data);
       })
       .catch(error => {
           console.log("Error fetching data from space", error);
       })
    }, [date])

 
    return (
        <MainSection>
            <Image imgSrc={imageData.url}/>
            <button className="bg-gray-300 hover:bg-gray-400 text-4xl text-gray-800 font-bold py-2 px-4 m-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download</span>
            </button>
            <ImageInfo 
                title={imageData.title} 
                date={imageData.date} 
                caption={imageData.explanation}
            />
            <ImageDatePicker value={date} setDate={setDate} max={today}/>
        </MainSection>
    )
}

export default ImageContainer;