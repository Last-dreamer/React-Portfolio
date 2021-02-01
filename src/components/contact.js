import React from 'react';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function contact() {
Aos.init({duraiton:2000});

    return (
        <div className="contact" id="contact">
            <div className='row'>
                <div className="container">
                      <div data-aos='zoom-in-down' className="contact_us-headers">
                        <p >Get In<span className="touch">&nbsp;&nbsp;TOUCH</span></p>
                      </div>

                      <div data-aos="zoom-out-up" className="row">
                          <div className="contact__us_textfields">
                             <form>
                                 <div className="inputSpace">
                                        <motion.input whileHover={{boxShadow:'0 0 8px rgba(255,255,255,0.6)'}}   type="text"   className="mInputs inputSpace" placeholder="Your Name" style={{width:'45%'}}/>
                                        <motion.input whileHover={{boxShadow:'0 0 8px rgba(255,255,255,0.6)'}}  type="text"  className="mInputs inputSpace" placeholder="Your Email" style={{width:'45%'}}/>
                                        <br/>
                                        <motion.input whileHover={{boxShadow:'0 0 8px rgba(255,255,255,0.6)'}}  type="text"  className="mInputs inputSpace extra" placeholder="Your Subject"/>

                                        <motion.textarea whileHover={{boxShadow:'0 0 8px rgba(255,255,255,0.6)'}}    className="mInputs inputSpace extra" placeholder="Your Message"/>

                                        <motion.input whileHover={{boxShadow:'0 0 8px rgba(255,255,255,0.6)', textShadow:'0 0 8px rgba(255,255,255,0.6)'}} type="submit"  value="Send" className="mbtns inputSpace" />


                                        
                                 </div>
                             </form>
                          </div>
                      </div>
                </div>

                

            </div>
            
        </div>
    )
}
