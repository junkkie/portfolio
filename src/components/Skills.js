import React from 'react'
import '../styles/skills.css'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='circle_L'>
      <img src='img/html5.png' alt='HTML5 logo' />
      <img src='img/css3.png' alt='CSS3 logo' />
      <img src='img/js.png' alt='JavaScript logo' />
      <img src='img/react.png' alt='React logo' />
      <img src='img/sass.png' alt='Sass logo' />
      <img src='img/styled.png' alt='Styled Components logo' />
      <img src='img/firebase.png' alt='Firebase logo' />
      </div>
      <div className='circle_S'>
      <img src='img/photoshop.png' alt='Adobe Photoshop logo' />
      <img src='img/illustrator.png' alt='Adobe illustrator logo' />
      <img src='img/github.png' alt='Github logo' />
      <img src='img/figma.png' alt='Figma logo' />
      </div>
    </div>
  )
}

export default Skills