import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import SHH from './img/shhh.png'
import Projects from './routes/Projects';
import Outtro from './routes/Outtro';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  },[])

  return (
    <>
    {loading ?
    <div className='loading'>
      <img src={SHH} alt='character' />
      <span>0%</span>
      <span>SHHHHHHH!</span>
    </div>
    :
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/outtro' element={<Outtro />} />
      </Routes>
    </BrowserRouter>
    }
    </>

  );
}

export default App;
