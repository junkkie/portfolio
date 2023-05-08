import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';

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
      <img src='/img/shhh.png' alt='charactor' />
      <span>0%</span>
      <span>SHHHHHHH!</span>
    </div>
    :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/' />
        <Route path='/' />
      </Routes>
    </BrowserRouter>
    }
    </>

  );
}

export default App;
