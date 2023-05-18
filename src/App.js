import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Pure from 'routes/Pure';
import React from 'routes/Reactapp';
import Clone from 'routes/Clone';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pure_css' element={<Pure />} />
        <Route path='/clone_site' element={<Clone />} />
        <Route path='/react_app' element={<React />} />
      </Routes>
  );
}

export default App;
