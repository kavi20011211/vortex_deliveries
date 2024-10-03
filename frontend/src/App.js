import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import Header from './components/Header';
import EmployeeLogin from './pages/LoginPage';
import Deliveries from './pages/Deliveries';
import Employees from './pages/Employees';
import Packages from './pages/Packages';
import Customers from './pages/Customers';
import {useSelector} from 'react-redux'

function App() {
  const {user}=useSelector((state)=>state.auth)
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
              <Route path='/deliveries' element={<Deliveries/>}/>
              <Route path='/employees' element={<Employees/>}/>
              <Route path='/packages' element={<Packages/>}/>
              <Route path='/customers' element={<Customers/>}/>
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
