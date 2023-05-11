import React from 'react'
import Bg from '../components/Bg'
import spaceship from '../img/among-us-spaceship.png'
import myChar from '../img/outtro_char.png'
import '../styles/outtro.css'
import { Link } from 'react-router-dom';

const Outtro = () => {

  
  return (
    <div className='outtro'>
      <Bg />
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
      <div className='homeBtn'>
          <Link to='/'><button>Click to home</button></Link>
      </div>
    </div>
  )
}

export default Outtro