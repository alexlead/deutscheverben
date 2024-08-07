import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import CommonNavbar from './components/common/CommonNavbar';
import TableView from './views/TableView';
import MemoView from './views/MemoView';
import TestView from './views/TestView';

function App() {

  return (
    <>
      <CommonNavbar />
      <div className='mt-3 mb-3 pt-5' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/table' element={<TableView />} />
        <Route path='/memo' element={<MemoView />} />
        <Route path='/test' element={<TestView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App
