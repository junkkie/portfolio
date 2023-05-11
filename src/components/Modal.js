import React from 'react'
import '../styles/modal.css'
import { Link } from 'react-router-dom';

const Modal = ({setModalOpen}) => {

  const onBackBtn = () => {
    setModalOpen(false);
  }

  return (
    <div className='modal'>
      <div className='modal_inner'>
        <h2>LIST</h2>
        <ul className='modal_list'>
          <li><Link to='/projects'>PROJECTS</Link></li>
          <li><Link to='/outtro'>CONTACT</Link></li>
        </ul>
        <div className='homeBtn'>
          <button onClick={onBackBtn}>Click to home</button>
        </div>
      </div>
    </div>
  )
}

export default Modal