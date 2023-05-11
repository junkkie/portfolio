import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Projects from './routes/Projects';
import Outtro from './routes/Outtro';
import Loading from './routes/Loading';

function App() {
  const [loading, setLoading] = useState(true);


  return (
      <Routes basename={process.env.PUBLIC_URL}>
        {loading ?
        <Route path='/' element={<Loading setLoading={setLoading} />} />
        :
        <Route path='/' element={<Main />} />
        }
        <Route path='/projects' element={<Projects />} />
        <Route path='/outtro' element={<Outtro />} />
      </Routes>
  );
}

export default App;
