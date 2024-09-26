import React from 'react'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <p>Vortex Deliveries</p>
      </div>
        <ul>
          <li><a>Dashboard</a></li>
          <li><a>Packages</a></li>
          <li><a>Deliveries</a></li>
          <li><a>Customers</a></li>
          <li><a>Analyse</a></li>
          <li><a>Employees</a></li>
        </ul>
    </div>
  )
}

export default SideBar