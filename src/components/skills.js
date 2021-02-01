
import React from 'react'
import ProgressBar from './progress';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Skills() {
     Aos.init({durtion:3000});

    return (
        <div className="skills" id="skills">
                <div className="container">
                    <div className="row">
                        <motion.div className="col-6"
                           initial={{x:'-100vw'}} 
                           animate={{x:0,}}
                           transition={{delay:.3, duration:.7, type: 'spring', stiffness:300}}
                        >
                            <div  data-aos={'zoom-in-right'} data-aos-offset={200} className="common__skills">
                                <motion.h1 
                                 initial={{x:'-100vw'}} 
                                 animate={{x:0,}}
                                 transition={{delay:.1, duration:.5}}
                                >
                                    Skills
                                    </motion.h1> 
                                <br/>
                            <strong >i'm expert On</strong>
                            <h1 className="skills__heading">Let's work togather</h1>
                            <p className="skills__content">
                                Wanna hire me <span className="sign">!</span> Then  press the following <span className='sign'>B</span>utton. 
                            </p>
                            <motion.a className="skills__btn" href="https://www.linkedin.com/in/muahmmad-asim-718315154/" whileHover={{
                               boxShadow:'0 0 8px rgba(255,255,255, 0.9)',
                               textShadow:'0 0 8px rgba(255,255,255, 0.9)',
                               }} >
                                Hire me Now.
                                </motion.a> 
                            </div>
                        </motion.div>

                        <div data-aos={"zoom-out-left"} data-aos-offset={200} className="col-6">
                            <div className="skills__common-Progress">
                                <p>Python, Django</p>
                                 <ProgressBar  done='70'/>
                            </div>


                            <div className="skills__common-Progress">
                                <p>Java, android</p>
                                 <ProgressBar  done='50'/>
                            </div>



                            <div className="skills__common-Progress">
                                <p>JavaScript, React.js, Node.js</p>
                                 <ProgressBar  done='60'/>
                            </div>



                            <div className="skills__common-Progress">
                                <p>Mobile Apps(Flutter)</p>
                                 <ProgressBar  done='70'/>
                            </div>

                            <div className="skills__common-Progress">
                                <p>Html5, css3, scss</p>
                                 <ProgressBar  done='85'/>
                            </div>

                        </div>
                    </div>
                </div>            
        </div>
    )
}
