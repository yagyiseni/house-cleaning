import React from 'react'
import BookingDetails from '../components/BookingDetails'
import Title from '../components/Title'
import map from '../images/map.PNG'
export default function BookingStatus() {
    return (
        <div className="booking-container">
            <div className="col">
               <BookingDetails/>
            </div>
            <div class="vl"></div>
            <div className="col">
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.189959106627!2d85.3355668232668!3d27.677198877423333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f3eea02579%3A0x19e10c9012043046!2sKoteshwor%20Bus%20Stop!5e0!3m2!1sen!2snp!4v1620539295283!5m2!1sen!2snp"
                        title="Cleaner Tracking" width="600px" height="450px" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}
