import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';


export default function About() {

    Aos.init({durtion:3000,});

    return (
        <div className="about" id='about'>
            <div className="container">
                <div data-aos={"zoom-in-down"} className="common">
                    <h1 className="mainheading">
                        About &nbsp;<span className="ME">Me</span>
                    </h1>
                    <p className="maincontent">
                    I am a creative developer && designer.         
                    </p>
                      <div className="commonBorder"></div>
                </div>

                <div className="row">
                    <div data-aos={"zoom-out-right"} className="col-6">
                        <div className="about__img">
                            <img src="/images/mine3.png"/>
                        </div>
                    </div>

                    <div  data-aos={"zoom-in-left"} className='col-6'>
                        <div className="about__info">
                            <h1>Hi There </h1>
                            <div className="about__info-p1">
                              I’ve always sought out opportunities and challenges that are meaningful to me.
                              Although my professional path has taken many twists and turns. 
                              I've never stopped engaging my passion to help others and solve problems.
                            </div>

                            <div className="about__info-p2">
                            As a Full stack developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things,
                               and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company. 
                            </div>

                            <div data-aos={"fade-in-down"} data-aos-offset={200} class="row">

                             <div className="col-6">
                                 
                                 <div className="about_info-common extra">
                                     <strong>Name</strong>
                                     <p>Muhammad Asim</p>
                                 </div>

                                 <div className="about_info-common extra">
                                     <strong>Phone</strong>
                                     <p>03479897740</p>
                                 </div>

                             </div>

                             <div className="col-6">
                                 <div className="about_info-common">
                                     <strong>Email</strong>
                                     <p>asim0000.ak@gmail.com</p>
                                 </div>

                                 

                             </div>

                            </div>


                        </div>

                    </div>

                </div>



 

            </div>
        </div>
    )
}
