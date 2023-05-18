import React from 'react'
import Bg from '../components/Bg'
import '../styles/projects.css'
import { Link } from 'react-router-dom'
import robot from '../img/among-us-robot.png'
import slime from '../img/among-us-slime.png'
import taco from '../img/among-us-tako.png'

const Projects = () => {
  return (
    <div className='projects'>
      <Bg />
      <h2>PROJECTS</h2>
      <ul>
        <li><Link to='/pure_css'>
          <img src={robot} alt='로봇 캐릭터 이미지' />
          <span>Pure CSS 프로젝트</span>
        </Link></li>
        <li><Link to='/clone_site'>
          <img src={slime} alt='슬라임 캐릭터 이미지' />
          <span>기업사이트 클론코딩 프로젝트</span>
        </Link></li>
        <li><Link to='/react_app'>
          <img src={taco} alt='문어 캐릭터 이미지' />
          <span>리액트 웹앱 프로젝트</span>
        </Link></li>
      </ul>
      <div className='homeBtn'>
        <Link to='/'><button>Click to home</button></Link>
      </div>
    </div>
  )
}

export default Projects