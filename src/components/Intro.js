import React, { useEffect } from 'react'
import '../styles/intro.css'
import mint from '../img/among-us-mint.png'
import purple from '../img/among-us-purple.png'
import pink from '../img/among-us-pink.png'


const Intro = () => {

  useEffect(() => {
    const h1 = document.querySelector('h1');
    const bg = document.querySelector('.intro');
    const char1 = document.querySelector('.char1');
    const char2 = document.querySelector('.char2');
    const char3 = document.querySelector('.char3');

    bg.classList.add('on');
    char1.classList.add('on');
    char2.classList.add('on');
    char3.classList.add('on');

    setTimeout(() => {
      h1.classList.add('on');
      function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        
        var i = 0;
        var timer = setInterval(function() {
          if (i < text.length) {
            element.append(text.charAt(i));
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      }
      
      var speed = 75;
      var h11 = document.querySelector('h1');

      typeEffect(h11, speed);
    }, 1000)

  },[]);



  return (
      <div className='intro'>
          <h1>Front End / UI Developer</h1>
        <div className='contents'>
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