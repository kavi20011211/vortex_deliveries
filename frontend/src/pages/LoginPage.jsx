import React from 'react'
import {useState} from 'react'

function EmployeeLogin() {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email,password} = formData;

  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit =(e)=>{
    e.preventDefault();

    const userData = {
      email,
      password
    }

    console.log(userData)
  }
  return (
    <>
      <section className="login-form">
      <p>Please provide the user credentials for login.</p>
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" className="form-control" id="email"
          name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
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