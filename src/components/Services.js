import React, { Component } from 'react'
import Title from './Title'
import { FaCalendarCheck, FaMapMarkedAlt, FaFilter, FaUserTie } from 'react-icons/fa';
export default class Services extends
    Component {
        state={
            services: [
                {
                    icon: <FaUserTie />,
                    title: "Professional Cleaners",
                    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis."
               
                },
                {
                    icon: <FaFilter />,
                    title: "Choose Cleaners",
                    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis."
               
                },
                {
                    icon: <FaCalendarCheck />,
                    title: "Book Cleaners",
                    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis."
               
                },
                {
                    icon: <FaMapMarkedAlt />,
                    title: "Track Arrival",
                    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis."
               
                } 
           ]
        }
    render() {
        return (
            <section className="services">
               <Title title="Why Us"/>
                <div className="services-center">
                    {this.state.services.map((item, index) =>
                    {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
               </div>
            </section>
        )
    }
}
