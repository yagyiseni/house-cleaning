import React from 'react'
import './UserCard.css'
import {Link} from 'react-router-dom'

export default function UserCard(props) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={props.imgsrc} alt="" height="100px" width="100px"/>
        </div>
      </div>
      <div className="lower-container">
        <h3>{props.name}</h3>
        <h4>{props.address}</h4>
        <p> {props.bio}
        </p>
        <button class="btn"><Link to="/users/single" style={{ textDecoration:"none"}}>View Profile</Link></button>
      </div>
     </div>
    )
}
