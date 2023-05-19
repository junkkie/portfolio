import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import Modal from './Modal';
import side from '../img/sidebtn.png'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  }
  useEffect(() => {/////////////////////////////////////////
    const sideBtn = document.querySelector(".sideBtn");
    sideBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if(modalOpen){
        setModalOpen(false);
      }
    })
  },[])

  
  return (
    <>
      <div className='header'>
        <img className='sideBtn' onClick={onModalOpen} src={side} alt='픽셀 외계인 이미지' />
      </div>
      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>

  )
}

export default Header