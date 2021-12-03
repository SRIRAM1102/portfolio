import './App.css';
import { useRef } from 'react';
import { useState } from 'react';
import { Firstpg } from './Firstpg';
import { About } from './About';
import { Scroll } from './scroll';
import { Navbar } from './Navbar';
import { Project } from './Project';
import { Skills } from './Skills';
import {Footer} from './Footer';
import {Journey} from'./journey';
import {Card} from "./card";


function App() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const refScrollUp = useRef();
  const handleScrollUp = () => { 
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
      <div className="app">
       <div ref={refScrollUp}> </div>
     <Navbar handleScrollUp={handleScrollUp} scrollPosition={scrollPosition} setSrollPosition={setSrollPosition}/>
    <Firstpg/> 
    <About/>
    <Journey/>    
    <Skills/>
    <Project/>

<Scroll handleScrollUp={handleScrollUp} scrollPosition={scrollPosition} setSrollPosition={setSrollPosition}/>
    <Footer/> 
  </div>
  );
}

export default App;
