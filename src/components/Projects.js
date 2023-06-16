import React from 'react'
<<<<<<< HEAD
=======
import robot from '../img/among-us-robot.png'
import slime from '../img/among-us-slime.png'
import taco from '../img/among-us-tako.png'
>>>>>>> f11e2d14e040b78097add33c3108bbcbd0ef562b
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
<<<<<<< HEAD
          <div class="catbug-wrapper1">
              <div class="catbug">
                <div class="catbug__eyes"></div>
                <div class="catbug__mouth"></div>
                <div class="catbug__wings">
                  <div class="catbug__wings-white"></div>
                </div>
                <div class="catbug__paws"></div>
              </div>
            </div>
          <span>기업사이트 클론코딩<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/react_app'>
          <div class="catbug-wrapper2">
            <div class="catbug">
              <div class="catbug__eyes"></div>
              <div class="catbug__mouth"></div>
              <div class="catbug__wings">
                <div class="catbug__wings-white"></div>
              </div>
              <div class="catbug__paws"></div>
            </div>
          </div>
          <span>리액트 웹앱<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/pure_css'>
          <div class="catbug-wrapper3">
            <div class="catbug">
              <div class="catbug__eyes"></div>
              <div class="catbug__mouth"></div>
              <div class="catbug__wings">
                <div class="catbug__wings-white"></div>
              </div>
              <div class="catbug__paws"></div>
            </div>
          </div>
=======
          <img src={slime} alt='슬라임 캐릭터 이미지' />
          <span>기업사이트 클론코딩<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/react_app'>
          <img src={taco} alt='문어 캐릭터 이미지' />
          <span>리액트 웹앱<br />프로젝트</span>  
        </Link></li>
        <li><Link to='/pure_css'>
          <img src={robot} alt='로봇 캐릭터 이미지' />
>>>>>>> f11e2d14e040b78097add33c3108bbcbd0ef562b
          <span>Pure CSS<br />프로젝트</span>
        </Link></li>
      </ul>
    </div>
  )
}

export default projects