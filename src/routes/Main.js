import React, { useEffect, useState, } from 'react'
import '../styles/main.css'
import Intro from '../components/Intro'
import Skills from './../components/Skills';
import Bg from '../components/Bg'
import Home from '../components/Home';
import Contact from 'components/Contact';
import Projects from '../components/Projects';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0)
    
    document.addEventListener('DOMContentLoaded', () => {
      let root = document.querySelector('.body');
      root.style.setProperty(`--window-width`, window.screen.width + 'px');
    });

    window.addEventListener("scroll", () => {
      let scll = window.scrollY;
      // console.log(scll);

    })


    setTimeout(() => {
      setLoading(false);
      const body = document.querySelector(".body")
      if(body){
        body.classList.add("on")
      }
      
    }, 2500)

    
  },[])


  
  return (
  <>
    {loading ?
    <div className='body'>
      <div className="rainbow"></div>
      <div className="nyan"></div>
      <p className='loading'>loading</p>
      <div id="hourglass">
        <div class="outline"></div>
        <div class="fill"></div>
        <div class="curtain"></div>
        <div class="curtain"></div>
        <div class="sand-fall"></div>
        <div class="sand-fall"></div>
        <div class="sand"></div>
      </div>
    </div>
    :
    <>
      <div className='background'>
        <Bg />
      </div>

      <div className='main'>
        <Intro />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
    }
  </>
  )
}

export default Main