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
              <span>최신 웹 표준에 대한 지식과 경험으로 다양한 장치에서 웹사이트가 잘 작동하도록 마크업합니다.</span>
            </li>
            <li>
              <img src={css} alt='CSS3 logo' />
              <span>웹 디자인 표준에 대한 지식과 경험으로 독특하고 생동감 있는 웹사이트를 디자인합니다.</span>
            </li>
            <li>
              <img src={js} alt='JavaScript logo' />
              <span>자바스크립트의 가장 기본적인 바닐라 자바스크립트를 활용하여 DOM을 조작하고 다양한 이벤트를 구현하며, ES6의 기능으로 코드의 가독성과 유지보수성을 향상시킵니다.</span>
            </li>
            <li>
            <img src={react} alt='React logo' />
            <span>리액트 라이브러리를 사용하여 가상 DOM을 효율적으로 렌더링하고, 애플리케이션의 확장성을 향상시킵니다.</span>
            </li>
            <li>
            <img src={sass} alt='Sass logo' />
            <img src={styled} alt='Styled Components logo' />
            <span>CSS 전처리기인 SASS, 리액트 컴포넌트를 직관적으로 디자인할 수 있는 Styled Components를 사용해 다양한 스타일링 작업을 수행합니다.</span>
            </li>
            <li>
            <img src={fbase} alt='Firebase logo' />
            <span>프론트엔드로서 백엔드 인프라를 쉽게 구축하고 관리할 수 있는 FireBase를 이용해 다양한 애플리케이션을 개발합니다.</span>
            </li>
          </ul>
          <div className='backBtn'>
            <button onClick={offSkillModal}>Click to back</button>
          </div>
        </div>
      }
    </div>
    </>

  )
}

export default Skills