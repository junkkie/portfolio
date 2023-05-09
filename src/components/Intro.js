import React, { useEffect } from 'react'
import '../styles/intro.css'
import mint from '../img/among-us-mint.png'
import purple from '../img/among-us-purple.png'
import pink from '../img/among-us-pink.png'


const Intro = () => {


  useEffect(() => {
    //인트로
    const h1 = document.querySelector(".intro>h1")
    const bg = document.querySelector(".intro")
    const char1 = document.querySelector(".char1")
    const char2 = document.querySelector(".char2")
    const char3 = document.querySelector(".char3")

    h1.classList.add("on");
    bg.classList.add("on");
    char1.classList.add("on");
    char2.classList.add("on");
    char3.classList.add("on");
  },[])


  return (
      <div className='intro'>
        <h1>Front End &amp; UI Developer</h1>
        <div className='contents'>
          <div className='blur'></div>
          <div className='characters'>
            <img className='char1' src={mint} alt='민트 캐릭터' />
            <img className='char2' src={purple} alt='퍼플 캐릭터' />
            <img className='char3' src={pink} alt='핑크 캐릭터' />
          </div>
        </div>
          <div className='downbutton'></div>
      </div>
  )
}

export default Intro