import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import {cleanerArray } from './ImageArray'
export default function UserCarousel() {
    return (
        <div className="user-carousel">
            <div className="carousel-center">
            <Carousel>
                {cleanerArray.map(cleaner => {
                return  <Carousel.Item>
                <img
                className="d-block w-100"
                src={cleaner}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>John Doe</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            })}
       
    </Carousel>
            </div>
    </div>
    )
}
