import React from 'react'
import '../styles/skills.css'
import html from '../img/html5.png'
import css from '../img/css3.png'
import js from '../img/js.png'
import react from '../img/react.png'
import sass from '../img/sass.png'
import styled from '../img/styled.png'
import fbase from '../img/firebase.png'
import ps from '../img/photoshop.png'
import ai from '../img/illustrator.png'
import git from '../img/github.png'
import figma from '../img/figma.png'
import Header from './Header'

const Skills = () => {


  return (
    <>
    <div className='skills'>
      <Header />
      <h2>Skills</h2>
      <div className='circle_L'>
      <img src={html} alt='HTML5 logo' />
      <img src={css} alt='CSS3 logo' />
      <img src={js} alt='JavaScript logo' />
      <img src={react} alt='React logo' />
      <img src={sass} alt='Sass logo' />
      <img src={styled} alt='Styled Components logo' />
      <img src={fbase} alt='Firebase logo' />
      </div>
      <div className='circle_S'>
      <img src={ps} alt='Adobe Photoshop logo' />
      <img src={ai} alt='Adobe illustrator logo' />
      <img src={git} alt='Github logo' />
      <img src={figma} alt='Figma logo' />
      </div>
      <div className=''>

      </div>
    </div>
    </>

  )
}

export default Skills