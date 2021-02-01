import React from 'react';
import './App.css';
import Banner from './components/banner';
import Nav from './components/nav';
import Services from './components/services';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
       <Banner />
       <Nav />
       <Services />
       <About />
       <Skills />
       <Portfolio />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
