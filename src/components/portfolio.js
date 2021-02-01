import React, { Component } from 'react'
import "../mine.scss"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const djangoProject = (props) => {

    return (
    <div className="row pad">
            <div className="col-3">      
                <div className="portfolio__image">
                <div className="portfolio__container mImage0">
                                                
                <a  target="_blank" href="https://lost2dreamer.pythonanywhere.com">
                    <div className="overlay">
                        <span>Contact App</span>
                    </div>
                </a>
                </div>
            </div>


</div> 


<div className="col-3">      
            <div className="portfolio__image">
                <div className="portfolio__container mImage1">
                <a target="_blank" href="https://github.com/Last-dreamer/Django-CMS">
                    <div className="overlay">
                        <span>Content Mangement System</span>
                    </div>
                </a>
                </div>
            </div>
        </div>
        
        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage2">
                                                    
                    <a  target="_blank" href="https://thejournal.pythonanywhere.com/">
                        <div className="overlay">
                            <span>News App</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 


</div>

    );
};


const reactProject = () => {

    return (
        <div className="row pad">
                <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage-books">
                                                    
                    <a  target="_blank" href="https://github.com/Last-dreamer/Book-Rating-App">
                        <div className="overlay">
                            <span>Book Rating App</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 

        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage3">
                                                    
                    <a  target="_blank" href="https://tic-tac-toe-50c8b.web.app/">
                        <div className="overlay">
                            <span>Tic Tac Toe Game</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 


        
        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage4">
                                                   
                    <a  target="_blank" href="https://github.com/Last-dreamer/Your-Place">
                        <div className="overlay">
                            <span>Your Place</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 





        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage5">
                                                    
                    <a  target="_blank" href="https://freecourses-blog.netlify.app/">
                        <div className="overlay">
                            <span>Free Courses</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 

</div>
    );
}



const mobileProject = () => {
    return (
        <div className="row pad">
                <div className="col-3">      

                    <div className="portfolio__image">
                    <div className="portfolio__container mImage8">
                                                    
                    <a  target="_blank" href="https://github.com/Last-dreamer/Book-Rating-app-Flutter-">
                        <div className="overlay">
                            <span><p>Book Rating App(Flutter)</p></span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 

        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage6">
                                                    
                    <a target="_blank" href="https://github.com/Last-dreamer/bmi_calculator">
                        <div className="overlay">
                            <span>BMI Calculator<br/>(Flutter)</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 

        <div className="col-3">      
                    <div className="portfolio__image">
                    <div className="portfolio__container mImage7">
                                                    
                    <a target="_blank" href="https://github.com/Last-dreamer/Spy-Robot">
                        <div className="overlay">
                            <span>Spy Robot App<br/>(Flutter)</span>
                        </div>
                    </a>
                    </div>
                </div>
        </div> 


</div>
    );
}



export default function Portfolio() {

    Aos.init({duration:2000});

    return (

        <div className='portfolio' id="portfolio">
            <div className="container">
             
               <div data-aos={'zoom-out-down'} className="common__heading">
                   <div className="portfolio__headerSection">
                       <h1>Portfolio</h1>
                       <p>All the following  projects I have done in various languages...</p>
                       <div className="commonBorder">
                       </div>
                   </div>

               </div>


               <div className="chips">
                       <div className="c ommon">

                       <Tabs defaultIndex={0} >
                           <TabList data-aos={'zoom-out-left'} data-aos-offsets={3000}  data-aos-distance={200} className="mChipsTab">
                                <Tab className="mChips" selectedClassName="mChipsSelected">All</Tab>
                                <Tab className="mChips" selectedClassName="mChipsSelected" >Django</Tab>
                                <Tab className="mChips" selectedClassName="mChipsSelected">React</Tab>
                                <Tab className="mChips" selectedClassName="mChipsSelected">Mobile</Tab>
                           </TabList>
 
                        <TabPanel data-aos={'zoom-in-left'}>
                            {djangoProject()}
                            {reactProject()}
                            {mobileProject()}
                        </TabPanel>
                        <TabPanel  data-aos={'zoom-in-down'}>
                          {djangoProject()}
                        </TabPanel>
                        <TabPanel data-aos={'zoom-in-down'}>
                           {reactProject()}
                        </TabPanel>

                        <TabPanel data-aos={'zoom-in-down'}>
                            {mobileProject()}
                        </TabPanel>

                        
                    </Tabs>
                       </div>
                 </div>

      
            </div>

          


          

        </div>



    );

 

    
}
