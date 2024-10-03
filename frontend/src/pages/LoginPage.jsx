import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login , reset} from '../features/auth/AuthSlice'

function EmployeeLogin() {
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })

  const {username,password} = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading, isError, isSuccess, message} = useSelector(
    (state)=>state.auth)


    useEffect(()=>{
      if(isError){
        //Update this to a toast message later
        console.log(message)
      } 
  
      if(isSuccess || user){
        navigate('/');
      }
  
      dispatch(reset());
    },[user, isError, isSuccess, message,navigate, dispatch])

  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit =(e)=>{
    e.preventDefault();

    const userData = {
      username,
      password
    }

    dispatch(login(userData));
  }

  if(isLoading){
    //update this to a loading page for later
    console.log("Loading.....")
  }
  return (
    <>
      <section className="login-form">
      <p>Please provide the user credentials for login.</p>
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" id="username"
          name="username" value={username} placeholder="Enter your username" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password"
          name="password" value={password} placeholder="Enter your password" onChange={onChange}/>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block"> Login</button>
        </div>
        </form>
      </section>
    </>
  )
}

export default EmployeeLogin