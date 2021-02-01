import React, {useEffect} from 'react';
import {FaGithub, FaGithubAlt, FaAppleAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
import 'aos/dist/aos.css';
import Aos from 'aos';

 

 const services = () => {

   
    Aos.init({duration:3000});
    
    return (
        <div className="services" id="services">
            <div className="container">
              <div className="services__header">
                <div  data-aos={"slide-left"} className="common__heading">
                   <h3 className="heading">Services</h3>
                    <h1 className="mainheading">
                        My Services
                    </h1>
                    <p className="maincontent">
                        i will  be providing the various services.
                    </p>
                    <div className="commonBorder"></div>
                   </div>
                   

                   {/*  Boxes ... */}

                   <div data-aos={"fade-right"} data-aos-offset={200}  className="row">
                       
                   <div className="col-4"  >

                  <motion.div className="services__box"
                              whileHover={{  color:'red',
                            boxShadow:'0 0 8px rgba(255,255,255,0.7)',
                            animate:"{{scale:0.7, type:'spring', stiffness:620, duration:1, delay:1.5, }}",
                         }} >
                                        <motion.div 
                                                whileHover={{scale:1.1,  originX:true }}
                                                transition={{delay:1, duration: 1, type:'spring', stiffness:200 }}
                                                 className="over">
                                                    <i> <FaGithub   className="commonIcon"/></i>

                                                
                                                <div className="services__box-heading">
                                                    Web Devolopement
                                                </div>
                                                <div className="services__box-p">

                                                    I'll devolop a websites using latest technologies.
                                                </div>
                                     </motion.div>

                                    </motion.div>          
                            </div>
                
                   <div className="col-4"  >
                                    <motion.div className="services__box"

                                     whileHover={{  color:'red ',
                                      boxShadow:'0 0 8px rgba(255,255,255,0.7)',
                                     animate:"{{scale:0.7, type:'spring', stiffness:620, duration:1, delay:1.5, }}",
                                     }}                                      
                                    >
                                        <motion.div 
                                                whileHover={{scale:1.1,  originX:true }}
                                                transition={{delay:1, duration: 1, type:'spring', stiffness:200 }}
                                                >
                                                    <motion.div   
                                                      whileHover={{  scale:1.2, color:'red', originY:true,
                                                      animate:"{{scale:0.7, type:'spring', stiffness:620, duration:1, delay:1.5, }}",
                                                     }} 
                                                    >
                                                                <FaGithubAlt  className="commonIcon"  />
                                                  </motion.div>

                                                
                                                <div className="services__box-heading">
                                                    Web Design
                                                </div>
                                                <div className="services__box-p">
                                                    i'll design your websites.
                                                </div>
                                     </motion.div>
                                    </motion.div>          
                            </div>
                   
                   <div className="col-4"  >
                                    <motion.div className="services__box"
                                     whileHover={{  color:'red ',

                                      boxShadow:'0 0 8px rgba(255,255,255,0.7)',
                                      animate:"{{scale:0.7, type:'spring', stiffness:620, duration:1, delay:1.5, }}",
                                     }} 
                                    
                                     
                                    >
                                        <motion.div 
                                                whileHover={{scale:1.1,  originX:true }}
                                                transition={{delay:1, duration: 1, type:'spring', stiffness:200 }}
                                                >
                                                    <motion.div   
                                                      whileHover={{  scale:1.2, color:'red', originY:true,
                                                     animate:"{{scale:0.7, type:'spring', stiffness:620, duration:1, delay:1.5, }}",
                                                     }} 
                                                    >
                                                   <FaAppleAlt className="commonIcon"  />
                                                  </motion.div>

                                                
                                                <div className="services__box-heading">
                                                    App Devolopement
                                                </div>
                                                <div className="services__box-p">
                                                    i'll devolop a native  & hybrid apps.
                                                </div>
                                     </motion.div>
                                    </motion.div>          
                            </div>
                    
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default services;