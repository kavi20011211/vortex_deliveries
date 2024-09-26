import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <p>Vortex Deliveries</p>
      </div>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/packages'>Packages</Link></li>
          <li><Link to='/deliveries'>Deliveries</Link></li>
          <li><Link to='/customers'>Customers</Link></li>
          <li><Link to='/'>Analyse</Link></li>
          <li><Link to='/employees'>Employees</Link></li>
        </ul>
    </div>
  )
}

export default SideBar