import React, { Component } from 'react'
import { MenuItems } from "./MenuItem"
import {Button} from "../Buttons/Button"
import './Navbar.css'
import {Link} from 'react-router-dom'
class Navbar extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() { 
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">WeClean<i className="fas  fa-broom"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' :'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} style={{textDecoration:'none'}}>
                                    {item.title}</Link>
                            </li>
                        )
                    })}
                   
                </ul>
                <Button ><Link to="/register" className="link" id="signup-btn">SignUp</Link></Button>
            </nav>
         );
    }
}
 
export default Navbar;
