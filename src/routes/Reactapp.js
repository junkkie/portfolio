import React from 'react'
import react from '../img/react.png'
import sass from '../img/sass.png'
import styled from '../img/styled.png'
import fbase from '../img/firebase.png'
import Bg from 'components/Bg'
import Header from 'components/Header'
import kakao from '../img/kakao.png'
import netflix from '../img/netflix.png'
import '../styles/reactapp.css'
import mob from '../img/mobile_mockup.png'
import pc from '../img/pc_mockup.png'
import { Link } from 'react-router-dom'

import kakao_video from '../videos/kakao.mp4'
import folix from '../videos/netflix.mp4'

const Reactapp = () => {

  const onClickTop = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    <>
      <div className='react_bg'>
      <Bg />
      </div>
      <Header />
      <div className='react_app'>
        <h3>REACT APP PROJECTS</h3>
        <ul>
          <li>
            <h4>KAKAO</h4>
            <div className='tools'>
            <img src={react} alt='리액트 로고 이미지' />
            <img src={sass} alt='sass 로고 이미지' />
            <img src={fbase} alt='FireBase 로고 이미지' />
            </div>
            <div className='pj_info'>
              <ul>
                <li>리액트를 이용한 채팅 앱 서비스 제작</li>
                <li>각각의 탭(친구목록, 채팅, 더보기 등)을 컴포넌트 단위로 나누어 제작</li>
                <li>firebase를 이용한 서버 관리(실시간 채팅, 유저 정보)</li>
                <li>map함수를 사용하여 유저 정보를 컴포넌트에 전달, 출력</li>
              </ul>
            </div>
            <div className='app_viewer'>
              <img className='logo_img' src={kakao} alt='카카오톡 로고 이미지' />
              <video className='mob_video' src={kakao_video} loop autoPlay muted />
              <img className='mob_mockup' src={mob} alt='목업 이미지' />
            </div>
          </li>
          <li>
            <h4>NETFLIX</h4>
            <div className='tools'>
            <img src={react} alt='리액트 로고 이미지' />
            <img src={styled} alt='Styled Components 로고 이미지' />
            <img src={fbase} alt='FireBase 로고 이미지' />
            </div>
            <div className='pj_info'>
              <ul>
                <li>리액트를 이용한 영화 OTT 서비스 앱 제작</li>
                <li>firebase를 이용한 서버 관리</li>
                <li>외부 API로 컨텐츠 페이지, 배너 구현</li>
                <li>styled components를 이용하여 디자인</li>
              </ul>
            </div>
            <div className='app_viewer'>
              <img className='logo_img' src={netflix} alt='넷플릭스 로고 이미지' />
              <video className='pc_video' src={folix} loop autoPlay muted />
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
            </div>
          </li>
        </ul>
        <div className='backBtn3'>
          <Link to='/'><button>Click to home</button></Link>
        </div>
        <div className='topBtn3'>
          <button onClick={onClickTop}>TOP!</button>
        </div>
      </div>
    </>

  )
}

export default Reactapp