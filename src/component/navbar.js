import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom';
import React,{useState} from 'react';


const Navbar = () => { 

    const [isLoggedin,setIsLoggedin] = useState(!!localStorage.getItem('token'))

    return (
        <nav  >
           <li className={classes.links}><NavLink className={classes.links} to="/">Home</NavLink></li>
           { isLoggedin && (<li className={classes.links}><NavLink className={classes.links} to="/about">About</NavLink></li>) }
           <li className={classes.links}><NavLink className={classes.links} to="/Login">Login</NavLink></li>       
           <li className={classes.links}><NavLink className={classes.links} to="/Logout">Logout</NavLink></li>
        </nav>
    )

}

export default Navbar;