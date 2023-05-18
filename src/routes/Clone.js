import Bg from 'components/Bg'
import Header from 'components/Header'
import React from 'react'
import html from '../img/html5.png'
import css from '../img/css3.png'
import js from '../img/js.png'
import samsung from '../img/samsung.png'
import cjone from '../img/cjone.png'
import '../styles/clone.css'
import pc from '../img/pc_mockup.png'
import ssem from '../videos/samsungEM.mp4'
import cj from '../videos/cjone.mp4'
import { Link } from 'react-router-dom';

const Clone = () => {

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
              <video src={ssem} loop autoPlay muted />
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
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
                    <li>pc, tablet, mobile 각각의 디바이스의 사이즈에 따라 레이아웃<br />이 바뀌는 반응형 웹사이트 제작</li>
                    <li>바닐라 자바스크립트로 자동 롤링 배너 구현</li>
                    <li>백그라운드 스크롤 이벤트</li>
                    <li>이미지 파일을 조합하여 만든 애니메이션</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='pj_viewer'>
              <img className='logo_img' src={cjone} alt='씨제이원 로고' />
              <video src={cj} loop autoPlay muted />
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
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
                    <li>pc, tablet, mobile 각각의 디바이스의 사이즈에 따라 레이아웃<br />이 바뀌는 반응형 웹사이트 제작</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='pj_viewer'>
              <img className='logo_img' src={samsung} alt='삼성 로고' />
              <video src='' loop autoPlay muted/>
              {/* 비디오, mockup 첨부 */}
              <img className='pc_mockup' src={pc} alt='목업 이미지' />
              <a href='https://junkkie.github.io/samsungcnt_2023/'>github link</a>
              <span className='test'>웹 접근성 검사 결과</span>
            </div>
          </li>
        </ul>
        <div div className='backBtn2'>
          <Link to='/'><button>Click to home</button></Link>
        </div>
      </div>
    </>

  )
}

export default Clone