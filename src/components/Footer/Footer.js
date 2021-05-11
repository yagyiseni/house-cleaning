import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaBroom } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { MenuItems } from '../Navbar/MenuItem.js'
export default function Footer() {
    return (
         <footer>
        <div className="container">
          <div className="footer-content">
            <div className="items">
              <h3>WeClean <FaBroom/></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipisicing elit. Laboriosam atque recusandae <br />
                in sit sunt molestiae aliquid fugit.<br />
                Mollitia eaque tempore iure sit nobis? Vitae <br />
                nemo, optio maiores numquam quis recusandae.</p> <br /> <br />
            </div>
            <div className="items">
              <h3>Useful Links</h3>
              <ul>
                  {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className="link">
                                    {item.title}</Link>
                            </li>
                        )
                    })}
                 <br />
              </ul>
            </div>
            <div className="items">
              <h3>Find us on</h3>
              <ul>
                <li><a href="#" style={{color:"#fff"}}><FaFacebook/></a></li>
                <li><a href="#" style={{color:"#fff"}}><FaInstagram/></a></li>
                <li><a href="#" style={{color:"#fff"}}><FaTwitter/></a></li>
                <li><a href="#" style={{color:"#fff"}}><FaLinkedin/></a></li> <br />
              </ul>
            </div>
            <div className="items">
              <h3>Contact</h3>
              <ul>
                <p style={{FontSize:10, color:'gray'}}>Head Office: Dhapakhel,Lalitpur</p>
                <p style={{FontSize:10,  color:'gray'}}>Email: wedontcare@gmail.com</p>
               <p style={{FontSize:10,  color:'gray'}}>Contact no: 98********</p>
              </ul>
            </div>

          </div>
          <p className="end">Copyright © 2021. All rights reserved.</p>
        </div>
      </footer>
    )
}
