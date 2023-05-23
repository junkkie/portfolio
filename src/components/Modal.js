import React, { useEffect, useRef } from 'react'
import '../styles/modal.css'
import useOnClickOutside from 'hooks/useOnClickOutside';
import { Link } from 'react-router-dom';

const Modal = ({modalOpen, setModalOpen}) => {

  const ref = useRef();

  useOnClickOutside(ref, () => {setModalOpen(false)});

  useEffect(() => {
    const modal = document.querySelector(".modal")
    if(modal){
      if(modalOpen){
        modal.classList.add("active")
      } else{
        modal.classList.remove("active")
      }
    }
  },[])


  const onBackBtn = () => {
    setModalOpen(false);
  }

  const windowH = window.innerHeight;
  console.log(windowH)

  const on1page = () => {
    window.scrollTo({
      top: 927,
      behavior: 'smooth'
    })
    setModalOpen(false);
  }
  const on2page = () => {
    window.scrollTo({
      top: 927*2,
      behavior: 'smooth'
    })
    setModalOpen(false);
  }
  const on3page = () => {
    window.scrollTo({
      top: 927*3,
      behavior: 'smooth'
    })
    setModalOpen(false);
  }
  const on4page = () => {
    window.scrollTo({
      top: 927*4,
      behavior: 'smooth'
    })
    setModalOpen(false);
  }

  return (
    <div className='wrapper'>
      <div className='modal' ref={ref}>
        <div className='modal_inner'>
          <h4>MENU</h4>
          <ul>
            <li onClick={on1page}><Link to='/'>INFO</Link></li>
            <li onClick={on2page}><Link to='/'>SKILLS</Link></li>
            <li onClick={on3page}><Link to='/'>PROJECTS</Link></li>
            <li onClick={on4page}><Link to='/'>CONTACT</Link></li>
          </ul>
        </div>
        <div className='homeBtn'>
          <button onClick={onBackBtn}>close</button>
        </div>
      </div>
    </div>

  )
}

export default Modal