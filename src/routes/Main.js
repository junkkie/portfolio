import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import Intro from '../components/Intro'
import Skills from './../components/Skills';
import Bg from '../components/Bg'
import Home from '../components/Home';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      let root = document.querySelector('.body');
      root.style.setProperty(`--window-width`, window.screen.width + 'px');
    });

    setTimeout(() => {
      setLoading(false);
      const body = document.querySelector(".body")
      body.classList.add("off")
    }, 5000)
    
  },[])
  
  return (
  <>
    {loading ?
    <div className='body'>
      <div className="rainbow"></div>
      <div className="nyan"></div>
      <div class="loading"></div>
    </div>
    :
    <>
      <Intro />
      <Bg />
      <Home />
      <Skills />
    </>
    }
  </>
  )
}

export default Main