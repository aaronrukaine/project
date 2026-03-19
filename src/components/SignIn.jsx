import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'


const SignIn = () => {
    const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')

  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")

  const navigate = useNavigate('')
  //function to submit data yo API

   const submit=async(e)=>{
    e.preventDefault()
    setLoading('Please wait !!!!!!')
//ADD DATA TO FORM DATA OBJECT
    try {
      const data=new FormData()
      data.append('email',email)
      data.append('password',password)
      //calling our api
      const response=await axios.post('http://tarayia.alwaysdata.net/api/signin',data)

      setLoading('')
      // check if the response has user item
      if (response.data.user){
        // if user is not found, store user details in localstorage
        localStorage.setItem('user',JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        // ?Redirect to /getproducts

        setTimeout(()=>{
          navigate("/")
        },2000)

      }
      else{
        // user not found,show error message
        setError(response.data.message);

      }


      
      
    } catch (error) {
      setLoading('');
      setError(error.data.message)
      
      
    }
  }
  

  return (
   <div className='row justify-content-center'> 

    <div className='col-md-6 card shadow' >
      <h1>Sign In</h1>

      <form action="" onSubmit={submit}>
        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>


        <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
        <br />
        <br />
        <input type="password" className='form-control' placeholder='password' value={password } onChange={(e)=>setPassword(e.target.value)} required/>
        <br />
        <br />

        <input type="submit" value='Sign In'  className='btn bg-info text-white w-100'/>

        <br />
        <br />

        <p>Don't have an account? <Link to='/signUp'>Sign Up</Link></p>
      </form>




    </div>     
      
    </div>
  )
}

export default SignIn