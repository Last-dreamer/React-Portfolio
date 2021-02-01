import React from 'react';
import '../mine.css';
import { FaAlignRight } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Nav = () => {
    const [state, setState]  =  React.useState(true);

    return <nav className="navbar">
            <div className="container">
                <div className="navbar__wraper">
                <ul className="nav__left">
                <div class="site-title">
                    <a>Lost<span className="mySpan">.</span>Dreamer</a>
               </div>
                </ul>
                {
                    state ? 
                    <ul className="nav__right">
                    <li><a href="/" >Home</a></li>
                    <li><a href="#services">Serices</a></li>
                    <li><a  href="#about" >About</a></li>
                    <li><a href="#skills" >Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
                : " "
                }
                 <motion.div whileHover={{color:'#F2709C'}} className="toggle" onClick={() => setState(!state)}><FaAlignRight /></motion.div>
                </div>
               
            </div>  
         
    </nav>
}


export default Nav;