import React from 'react'
import DateAndTimePickers from '../components/DateAndTimePicker'
import Title from '../components/Title'
import { useContext } from 'react'
import { CleanerContext } from '../context'

//get all unique values
const getUnique = (items, value) => {
    return [... new Set(items.map(item=>item[value]))]
}

export default function UserFilter() {
    const context = useContext(CleanerContext);
    //console.log(context);
    const {
        handleChange, price, minPrice,
        maxPrice, location,supplies,
        equipments
    } = context;

    // //get unique types
    // let locations = getUnique(cleaners, 'location');

    // //map to jsx
    // locations = locations.map((item, index) => {
    //     return <option value={item} key={index}>{item}</option>
    // })

    return (
        <section className="filter-container">
            <Title title="Enter your search parameters"/>
            <form className="filter-form">
                <div className="search-bar">
                    <label htmlFor="search">Location</label>
                    <input type="text" id="search" placeholder="enter a location" onChange={handleChange}></input>
                </div>
                {/*date-time picker */}
                <div className="date-time-picker">
                    <DateAndTimePickers/>
                </div>
                {/* end of date-time picker */}
                {/*room price */}
                <div className="form-group">
                        <label htmlFor="price">Rate per hour (Npr) ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                        id="price"
                        className="form-control" onChange={handleChange}/>
                </div>
                {/* end of room price */}
                {/* no. of bedroom */}
                <div className="form-group">
                    <label htmlFor="bedroom">Bedroom</label>
                    <select name="bedroom" id="bedroom"
                        className="form-control" onChange={handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                {/* end of no. of bedroom */}
                {/* no. of bedroom */}
                <div className="form-group">
                    <label htmlFor="bathroom">Bathroom</label>
                    <select name="bathroom" id="bathroom"
                        className="form-control" onChange={handleChange} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                {/* end of no. of bedroom */}
           </form>
        </section>
    )
}
