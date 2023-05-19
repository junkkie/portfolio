import Bg from 'components/Bg'
import Header from 'components/Header'
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/clone.css'

import html from '../img/html5.png'
import css from '../img/css3.png'
import js from '../img/js.png'

import pc from '../img/pc_mockup.png'
import tab from '../img/tablet_mockup.png'
import mob from '../img/mobile_mockup.png'

import samsung from '../img/samsung.png'
import cjone from '../img/cjone.png'

import cnt from '../videos/samsungCNT.mp4'
import cnt_tab from '../img/cnt_tab.png'
import cnt_mob from '../img/cnt_mob.png'

import ssem from '../videos/samsungEM.mp4'

import cj from '../videos/cjone.mp4'
import cj_tab from '../img/cjone_tab.png'
import cj_mob from '../img/cjone_mob.png'


const Clone = () => {

  const onClickTop = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    <>
      <div className='clone_bg'>
        <Bg />
      </div>
      <Header />
      <div className='clone_site'>
        <h3>CLONE SITE PROJECTS</h3>
        <ul>
          <li>
            <h4>SAMSUNG EM</h4>
            <div className='tools'>
              <img src={html} alt='HTML5 로고 이미지' />
              <img src={css} alt='CSS3 로고 이미지' />
              <img src={js} alt='JavsScript 로고 이미지' />
            </div>
            <div className='pj_info'>
              <ul>
                <li>기여도: 95%</li>
                <li>기간: 2023.02(7일)</li>
                <li>
                  <span>주요 업무</span>
                  <ul>
                    <li>바닐라 자바스크립트를 이용한 다양한 이벤트<br />(mouse enter/leave, click, scroll)</li>
                    <li>자동 롤링 동영상 배너</li>
                    <li>입력 Form, table이 포함된 서브페이지 구현</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='pj_viewer'>
              <img className='logo_img' src={samsung} alt='삼성 로고' />
              <video className='pc_video' src={ssem} loop autoPlay muted />
              <img className='pc_mockup' src={pc} alt='PC 목업 이미지' />
              <a href='https://junkkie.github.io/samsungsem_2023/'>github link</a>
              <span className='test'>웹 접근성 검사 결과</span>
            </div>
          </li>

          <li>
            <h4>CJONE</h4>
            <div className='tools'>
              <img src={html} alt='HTML5 로고 이미지' />
              <img src={css} alt='CSS3 로고 이미지' />
              <img src={js} alt='JavsScript 로고 이미지' />
            </div>
            <div className='pj_info'>
              <ul>
                <li>기여도: 80%</li>
                <li>기간: 2023.03(3일)</li>
                <li>
                  <span>주요 업무</span>
                  <ul>
                    <li>pc, tablet, mobile 각각의 디바이스의 사이즈에 따라 레이아웃이 바뀌는 반응형 웹사이트 제작</li>
                    <li>바닐라 자바스크립트로 자동 롤링 배너 구현</li>
                    <li>백그라운드 스크롤 이벤트</li>
                    <li>이미지 파일을 조합하여 만든 애니메이션</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='pj_viewer'>
              <img className='logo_img' src={cjone} alt='씨제이원 로고' />
              <video className='pc_video' src={cj} loop autoPlay muted />
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
              <img className='tab_img' src={cj_tab} alt='tablet 캡처 이미지' />
              <img className='tab_mockup' src={tab} alt='tablet 목업 이미지' />
              <img className='mob_img' src={cj_mob} alt='mobile 캡처 이미지' />
              <img className='mob_mockup' src={mob} alt='mobile 목업 이미지' />
              <a href='https://junkkie.github.io/CJONE_2023/'>github link</a>
              <span className='test'>웹 접근성 검사 결과</span>
            </div>
          </li>

          <li>
            <h4>SAMSUNG C&amp;T</h4>
            <div className='tools'>
              <img src={html} alt='HTML5 로고 이미지' />
              <img src={css} alt='CSS3 로고 이미지' />
              <img src={js} alt='JavsScript 로고 이미지' />
            </div>
            <div className='pj_info'>
              <ul>
                <li>기여도: 100%</li>
                <li>기간: 2023.04(10일)</li>
                <li>
                  <span>주요 업무</span>
                  <ul>
                    <li></li>
                    <li>바닐라 자바스크립트를 이용한 자동 롤링 동영상 배너</li>
                    <li>pc, tablet, mobile 각각의 디바이스의 사이즈에 따라 레이아웃이 바뀌는 반응형 웹사이트 제작</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='pj_viewer'>
              <img className='logo_img' src={samsung} alt='삼성 로고' />
              <video className='pc_video' src={cnt} loop autoPlay muted/>
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
              <img className='tab_img' src={cnt_tab} alt='tablet 캡처 이미지' />
              <img className='tab_mockup' src={tab} alt='tablet 목업 이미지' />
              <img className='mob_img' src={cnt_mob} alt='mobile 캡처 이미지' />
              <img className='mob_mockup' src={mob} alt='mobile 목업 이미지' />
              <a href='https://junkkie.github.io/samsungcnt_2023/'>github link</a>
              <span className='test'>웹 접근성 검사 결과</span>
            </div>
          </li>
        </ul>
        <div className='topBtn2'>
          <button onClick={onClickTop}>TOP!</button>
        </div>
        <div div className='backBtn2'>
          <Link to='/'><button>Click to home</button></Link>
        </div>
      </div>
    </>

  )
}

export default Clone