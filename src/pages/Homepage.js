import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import UserCarousel from '../components/UserCarousel'
import FeaturedCleaner from '../components/FeaturedCleaner'
export default function Homepage() {
    return (
        <>
        <Hero >
            <Banner title="Home Cleaning Made Easy"
                subtitle="Find professionals ">
                <Link to="/users/" className="btn" style={{color:"white"}}>
                        Browse
                </Link>
            </Banner>  
        </Hero> 
        <Services/>
        <FeaturedCleaner/> 
        {/* <UserCarousel/>  */}
        </>
    )
}
