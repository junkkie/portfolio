import React, { useState } from 'react'
import '../styles/header.css'
import Modal from './Modal';
import side from '../img/sidebtn.png'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState({});

  const onModalOpen = (modal) => {
    setModalOpen(true);
    setBtnClicked(modal)
  }

  
  return (
    <>
      <div className='header'>
        <img className='sideBtn' onClick={onModalOpen} src={side} alt='픽셀외계인 모양 사이드버튼' />
      </div>
      {modalOpen && (
        <Modal {...btnClicked} setModalOpen={setModalOpen} />
      )}
    </>

  )
}

export default Header