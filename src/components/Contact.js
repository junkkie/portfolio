import React from 'react'
import spaceship from '../img/among-us-spaceship.png'
import myChar from '../img/outtro_char.png'
import '../styles/contact.css'
import Header from './Header'

const Contact = () => {

  const onClickTop = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    <div className='outtro'>
      <Header />
      <div className='out_title'>
        <img className='spaceship' src={spaceship} alt='우주선 이미지' />
        <h2>Contact Me!</h2>
        <img className='spaceship' src={spaceship} alt='우주선 이미지' />
      </div>

      <img className='char' src={myChar} alt='미모티콘 아바타' />
      <div className='contact'>
        <div className='list'>
          <span>email</span>
          <span>jenkem029@gmail.com</span>
          <span>phone</span>
          <span>010 5305 9913</span>
          <span><a href='https://github.com/junkkie'>github</a></span>
          <span>△click!△</span>
        </div>
      </div>
      <div className='topBtn'>
        <button onClick={onClickTop}>TOP!</button>
      </div>
    </div>
  )
}

export default Contact