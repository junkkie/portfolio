import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Projects from './routes/Projects';
import Outtro from './routes/Outtro';
import Loading from './routes/Loading';
import Pure from 'routes/Pure';
import React from 'routes/Reactapp';
import Clone from 'routes/Clone';

function App() {
  const [loading, setLoading] = useState(true);


  return (
      <Routes>
        {loading ?
        <Route path='/' element={<Loading setLoading={setLoading} />} />
        :
        <Route path='/' element={<Main />} />
        }
        <Route path='/projects' element={<Projects />} />
        <Route path='/outtro' element={<Outtro />} />
        <Route path='/pure_css' element={<Pure />} />
        <Route path='/clone_site' element={<Clone />} />
        <Route path='/react_app' element={<React />} />
      </Routes>
  );
}

export default App;
