import React from 'react'

function Header() {
  return (
    <header className='header'>
        <ul>
            <li>Welcome user</li>
            <li>username</li>
            <li>
                <button className='btn'>Logout</button>
            </li>
        </ul>
    </header>
  )
}

export default Header