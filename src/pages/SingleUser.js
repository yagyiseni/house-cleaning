import React from 'react'
import cleaner1 from "../images/user1.jpg";
import {FaStarHalfAlt,FaStar,FaRegStar} from 'react-icons/fa'
import { Button } from '../components/Buttons/Button';
import Title from '../components/Title';
import ImageComparer from '../components/ImageComparer';

const previousWorkArray = [{
    employer: 'User101',
    rooms: '1 bedroom 3 bathrooms',
    rating: '2.5'
},
{
    employer: 'User171',
    rooms: '5 bedroom 3 bathrooms',
        rating: '4.5'
    },
    {
        employer: 'User671',
        rooms: '3 bedroom 2 bathrooms',
        rating: '3'}
]
export default function SingleUser() {
    return (
        <>
        <div className="single-user">
            <div className="col">
                <div className="image-wrapper">
                    <img src={cleaner1} alt="image"/>
                </div>
                <Button>View Schedule</Button>
                <Button>Book Now</Button>
            </div>
            <div className="col">
                    <div className="user-details">
                        <h1 style={{ textTransform:"initial"}}>Mr Knightley</h1>
                    <h4 >Location:Dhapakhel</h4>
                    <p >Experience:<ul>
                        <li>over five years of experience </li>
                        <li>Lorem ipsum dolor sit amet. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul></p>
                    <p>Past work through the app:
                     <ul>
                                {
                                    previousWorkArray.map(work => {
                                        return (<li>Employer: {work.employer}<br></br>
                                            Number of rooms: {work.rooms}<br></br>
                                            User101 rated them:{work.rating}</li>)
                                    })
                            }
                     </ul>
                    </p>
                </div>
            </div>
        </div>
        <hr className="horizontal-line"/>
        <div className="demo-container">
        <p className="demo-title">Demo</p>
        <div className="image-comparer-container">
        <ImageComparer />
        </div>
        </div>
        </>
    )
}
