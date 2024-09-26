import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import Header from './components/Header';
import EmployeeLogin from './pages/LoginPage';

function App() {
  const user = 8
  return (
    <>
      <BrowserRouter>    
      {
        user?(
          <>
            {/* Sidebar */}
          <SideBar/>
          <div className='side-content'>
          <Header/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
            </Routes>
          </div>
          </>
        ):(
          <div className='container'>
          <Routes>
            <Route path='/' element={<EmployeeLogin/>}/>
          </Routes>       
      </div>)
      }
      </BrowserRouter>
    </>
  );
}

export default App;
