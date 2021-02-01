import React from 'react';
import {FaFacebookF, FaInstagram, FaGithub, FaTwitter} from 'react-icons/fa';
import {motion} from 'framer-motion';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Banner = () => {

    Aos.init({duration:4000});

    return <header className="header">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                  <div className="header__content">
                      <div className="header__section">
                      <ul className="header__ul">
                          <li>
                              <a  target="_blank" href="https://web.facebook.com/lost2dreamer">
                              <FaFacebookF  />
                              </a>
                          </li>
                          <li>
                          <a  target="_blank"href="https://www.instagram.com/lost2dreamer/">
                              <FaInstagram />
                              </a>
                          </li>
                          <li>
                          <a  target="_blank"href="https://twitter.com/lostdre29538923">
                              <FaTwitter />
                              </a>
                          </li>
                          <li>
                          <a  target="_blank"href="https://github.com/Last-dreamer">
                              <FaGithub />
                              </a>
                          </li>
                      </ul>
                      <motion.h1
                      initial={{x:'-100vw'}}
                      animate={{x:0}}
                      transition={{delay:.4, type:'spring', stiffness:200}}
                      > I am Muhammad Asim
                      </motion.h1>
                      
                      <p
                      >A Full stack Devoloper ...</p>
                      <br/>
                       <div className="header__btns" >
                           <motion.a whileHover={{
                               boxShadow:'0 0 8px rgba(255,255,255, 0.9)',
                               textShadow:'0 0 8px rgba(255,255,255, 0.9)',
                               }} 
                               
                               href="#portfolio" class="btn btn-outline">Portfolio</motion.a>
                       </div>
                     </div>
                   </div>
                  </div>
                  <div data-aos={"zoom-in-bottom"} className="col-6">
                      <div className="banner__img">
                          <img src="/images/mine2.png" alt="man"/>

                      </div>

                  </div>

              </div>

          </div>
    </header>
}

export default Banner;