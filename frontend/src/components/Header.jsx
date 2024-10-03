import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/AuthSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.auth)

  const onLogout=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header className='header'>
        <ul>
            <li>Welcome {user && user.name}</li>
            <li>{user && user.username}</li>
            <li>
                <button className='btn' onClick={onLogout}>Logout</button>
            </li>
        </ul>
    </header>
  )
}

export default Header