import React from 'react'
import ImageSlider from "react-image-comparison-slider";
import before from '../images/33253.jpg';
import after from '../images/after.png';
// import {cleanerArray} from './ImageArray'
// const {  cleaner1, cleaner6 } = cleanerArray;
export default function ImageComparer() {
    return (
           <div className="image-comparer"style={{ width: 700, height: 450 }}>
                <ImageSlider
                    image1={before}
                    image2={after}
                    leftLabelText="Before"
                    rightLabelText="After"
                    onSlide={() => {
                    console.log("sliding");
                    }}
                />
            </div> 
        
    )
}
