
import React, { Component } from 'react'
// import { CleanerContext } from '../context'
import dataArray from '../data'
import Title from './Title'
import UserCard from './UserCard/UserCard'
export default class FeaturedCleaner extends Component {
    // static contextType = CleanerContext;
    render() {
        // const { featuredCleaners: cleaners } =
        //     this.context;
        // console.log(cleaners);
        // cleaners = cleaners.map(cleaner => {
        //     return <UserCard key={cleaner.id} cleaner={cleaner}/>
        // })
        
        // let data = dataArray.filter(item => {
        //     item.map(cleaner => {
        //         let arr = cleaner.filter(cleaner[1].fields.featured === true);
        //         return arr;
        //     })
        //     return item;
        // });
        let data = dataArray.splice(9, 3);
        return (
            <section className="featured-cleaners">
                <Title title="featured cleaners" />
                <div className="featured-cleaners-center">
                    {
                    data.map(item => {
                        return <UserCard imgsrc={item.fields.images[0].fields.file.url} name={item.fields.name}
                         address={item.fields.location} bio={item.fields.bio}/>;
                    })
                    
                    /* {
                     cleaners   
                    } */}
                </div>
            </section>
        )
    }
}
