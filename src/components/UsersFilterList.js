import React from 'react'
import UserCard from './UserCard/UserCard'
import dataArray from '../data.js'
export default function UsersFilterList({ cleaners }) {
    // if (cleaners.length === 0) {
    //     return (
    //         <section className="userslist">
    //         <div className="userslist-center">
    //             <h3>Unfortunately no rooms matched your search parameters</h3>
    //         </div>
    //         </section>
    //     )
    // }
    return (
        <section className="userslist">
            <div className="userslist-center">
                {
                    // cleaners.map(item => {
                    //     return <UserCard key={item.id} cleaner={item} />;
                    // })
                    dataArray.map(item => {
                        return <UserCard imgsrc={item.fields.images[0].fields.file.url} name={item.fields.name}
                         address={item.fields.location} bio={item.fields.bio}/>;
                    })
              } 
            </div>
        </section>
    )
}
