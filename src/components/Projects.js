import React from 'react'
import robot from '../img/among-us-robot.png'
import slime from '../img/among-us-slime.png'
import taco from '../img/among-us-tako.png'
import { Link } from 'react-router-dom';
import '../styles/projects.css'
import Header from './Header';

const projects = () => {


  return (
    <div className='projects'>
      <Header />
      <h2>PROJECTS</h2>
      <ul>
        <li><Link to='/clone_site'>
          <img src={slime} alt='슬라임 캐릭터 이미지' />
          <span>기업사이트 클론코딩<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/react_app'>
          <img src={taco} alt='문어 캐릭터 이미지' />
          <span>리액트 웹앱<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/pure_css'>
          <img src={robot} alt='로봇 캐릭터 이미지' />
          <span>Pure CSS<br />프로젝트</span>
        </Link></li>
      </ul>
    </div>
  )
}

export default projects