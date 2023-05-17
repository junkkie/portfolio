import React, { useState } from 'react'
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
import tab from '../img/mini_tablet.png'

const Skills = () => {
  const [onskills, setOnskills] = useState(false);

  const onSkillModal = () => {
    setOnskills(true);
  }
  
  const offSkillModal = () => {
    setOnskills(false);
  }

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
      <div className='tab'>
        <img src={tab} alt='타블렛 이미지' onClick={onSkillModal} />
      </div>
      {onskills &&
        <div className='skillModal'>
          <ul>
            <li>
              <img src={html} alt='HTML5 logo' />
              <span></span>
            </li>
            <li>
              <img src={css} alt='CSS3 logo' />
              <span></span>
            </li>
            <li>
              <img src={js} alt='JavaScript logo' />
              <span></span>
            </li>
            <li>
            <img src={react} alt='React logo' />
            <span></span>
            </li>
            <li>
            <img src={sass} alt='Sass logo' />
            <span></span>
            </li>
            <li>
            <img src={sass} alt='Sass logo' />
            <img src={styled} alt='Styled Components logo' />
            <span></span>
            </li>
            <li>
            <img src={fbase} alt='Firebase logo' />
            <span></span>
            </li>
          </ul>
          <div>
            <button onClick={offSkillModal}>Click to back</button>
          </div>
        </div>
      }
    </div>
    </>

  )
}

export default Skills