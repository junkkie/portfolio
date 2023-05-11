import React, { useEffect } from 'react'
import SHH from './img/shhh.png'

const Loading = ({setLoading}) => {

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  },[])

  return (
    <div className='loading'>
    <img src={SHH} alt='character' />
    <span>0%</span>
    <span>SHHHHHHH!</span>
  </div>
  )
}

export default Loading