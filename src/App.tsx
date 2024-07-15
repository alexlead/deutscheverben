import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import CommonNavbar from './components/common/CommonNavbar';
import TableView from './views/TableView';

function App() {

  return (
    <>
    <CommonNavbar />
    <div className='mt-3 mb-3 pt-5'/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/table' element={<TableView />} />

        <Route path="*" element={<Navigate to="/" />} />
  
      </Routes>

    </>
  );
}

export default App
