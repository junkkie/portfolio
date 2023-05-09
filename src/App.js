import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import SHH from './img/shhh.png'

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
      <img src={SHH} alt='charactor' />
      <span>0%</span>
      <span>SHHHHHHH!</span>
    </div>
    :
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
    }
    </>

  );
}

export default App;
