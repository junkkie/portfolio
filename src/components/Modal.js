import React from 'react'
import '../styles/modal.css'

const Modal = ({setModalOpen}) => {

  const onBackBtn = () => {
    setModalOpen(false);
  }

  return (
    <div className='modal'>
      <div className='modal_inner'>
        <h2>LIST</h2>
        <ul className='modal_list'>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
        <div className='homeBtn'>
          <button onClick={onBackBtn}>Click to home</button>
        </div>
      </div>
    </div>
  )
}

export default Modal