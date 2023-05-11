import React from 'react'
import Header from './Header'
import myProfile from '../img/profile.png'
import '../styles/home.css'

const Home = () => {

  return (
    <div className='main'>
    <Header />
    <h2>Who am I</h2>
    <div className='info'>
      <img className='profile_img' src={myProfile} alt='profile' />
      <p>
      <span>Name: 김서연</span><br />
      <span>Birth: 1998.02.09</span><br />
      <span>Address: 서울시 강동구</span>
      </p>
      <p>Education: 이젠아카데미 평생교육원<br />UI&amp;UX&amp;프론트엔드 과정 수료</p>
    </div>
    <div className='main_intro'>
      <h3>무한한 것들의 집합 속에서 유영을.</h3>
      <p>
        안녕하세요, 광활한 우주만큼의 포용력과 가능성을 지닌 신입 개발자 김서연입니다.<br />
        트렌드와 편의성을 넘어서는 가치를 가진 웹을 개발하고 싶습니다.<br />
        우리가 아직 모두 발견하지 못한 우주,<br />
        그 안에서 작고 사소한 존재로서 시작하여 무궁한 발전을 향해 유영하고 있습니다.
      </p>
    </div>
    <div className='dog'></div>
    <div className='cat'></div>
  </div>
  )
}

export default Home