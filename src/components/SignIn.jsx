import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const SignIn = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")

  const navigate = useNavigate()

  const submit = async(e) => {
    e.preventDefault()
    setLoading('Please wait...'); 
    setError(''); 
    setSuccess('');

    try {
      const data = new FormData()
      data.append('email', email)
      data.append('password', password)

      const response = await axios.post('http://tarayia.alwaysdata.net/api/signin', data)

      setLoading('')
      if (response.data.user){
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        setTimeout(()=>{
          navigate("/")
        }, 1500)

      } else {
        setError(response.data.message);
      }
      
    } catch (err) {
      setLoading('');
      setError(err.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
      <div className='card shadow-lg p-5 rounded' style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className='text-center mb-4 text-primary'>Sign In</h2>

        <form onSubmit={submit}>
          {loading && <p className='text-warning text-center'>{loading}</p>}
          {success && <p className='text-success text-center'>{success}</p>}
          {error && <p className='text-danger text-center'>{error}</p>}

          <input 
            type="email" 
            className='form-control mb-3' 
            placeholder='Email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}  
            required
          />

          <input 
            type="password" 
            className='form-control mb-4' 
            placeholder='Password' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required
          />

          <button 
            type="submit" 
            className='btn btn-primary w-100 py-2 fw-bold hover-btn mb-3'
          >
            Sign In
          </button>

          <p className='text-center'>
            Don't have an account? <Link to='/signUp'>Sign Up</Link>
          </p>
        </form>

      </div>

      {/* Extra CSS */}
      <style>
        {`
          .hover-btn {
            transition: all 0.3s ease;
          }
          .hover-btn:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
          }
          input.form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0,123,255,0.5);
          }
        `}
      </style>
    </div>
  )
}

export default SignIn