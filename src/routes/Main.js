import React from 'react'
import '../styles/main.css'
import Intro from '../components/Intro'
import Skills from './../components/Skills';
import Bg from '../components/Bg'
import Home from '../components/Home';

const Main = () => {
  
  return (
  <>
    <Intro />
    <Bg />
    <Home />
    <Skills />
  </>
  )
}

export default Main