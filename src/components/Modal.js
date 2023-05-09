import React from 'react'

const Modal = ({setModalOpen}) => {

  const onBackBtn = () => {
    setModalOpen(false);
  }

  return (
    <div className='modal'>
      <div className='modal_inner'>
        <h2>Projects</h2>
        <ul className='projects'>
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