import React from "react";
import '../stilos/header.css'
import bus from '../assets/icons/126474.svg'
import nn from '../assets/icons/747376.svg'
import Login from '../components/Login'
import { BrowserRouter as Router, Link,  Switch, Route } from 'react-router-dom'
const Header = ()  => {   
    return (
  
        <nav className="navbar  navbar-expand ">
         
            <div className="navbar">Chukwudi</div>
          

             <img src={bus} alt='..' width='10' height='25'className="form-control-s"/>

                <input type="text" className="form-control-m" placeholder="Search">
                </input>
                
                <img src={nn} alt='..' width='10' height='25' />
        
         
        </nav>


    )

}
export default Header