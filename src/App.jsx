
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import People from './pages/People';
import Planets from './pages/Planets';

function App() {

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Navbar />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
      </Routes>
    </fieldset>
  );
}

export default App;
