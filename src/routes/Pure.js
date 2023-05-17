import Bg from 'components/Bg'
import React from 'react'
import '../styles/pure.css'
import video1 from '../videos/pure_css_1.mp4'
import video2 from '../videos/pure_css_2.mp4'
import Header from 'components/Header'

const Pure = () => {
  const onbackBtn = () => {
    window.history.back();
  }

  return (
    <>
      <div className='pure_bg'>
        <Bg />
      </div>
      <Header />
      <div className='pure_css'>
        <h3>PURE CSS PROJECTS</h3>
        <ul>
          <li>
            <h4>project 1</h4>
            <video src={video1} autoPlay loop></video>
            <ul>
              <li>기여도: 100%</li>
              <li>CSS3를 이용한 산리오 캐릭터 애니메이션 제작</li>
              <li>keyframes로 mouse over 시 애니메이션을 표현</li>
              <li>웹폰트, 하트로 캐릭터가 가지고 있는 이미지 극대화</li>
            </ul>
          </li>
          <li>
            <h4>project 2</h4>
            <video src={video2} autoPlay loop></video>
            <ul>
              <li>기여도: 100%</li>
              <li>CSS3로 페이스북 어플 이모지 애니메이션 제작</li>
              <li>각 이모지에 들어가는 디자인, 애니메이션 직접 구현</li>
            </ul>
          </li>
        </ul>
        <div className='backBtn'>
            <button onClick={onbackBtn}>Click to home</button>
          </div>
      </div>
    </>

  )
}

export default Pure