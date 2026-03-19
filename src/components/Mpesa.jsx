import React from 'react'
//hook used to recieve data pursed 
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Mpesa = () => {
  //recieve the parsed data from getproducts
  const{product}=useLocation().state || {}
  const [loading,setLoading]=useState('')
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')

  const [phone,setPhone]=useState('')
  const submit=async(e)=>{
    setLoading('Please wait')
    e.preventDefault()


    try {
      const data=new FormData()
      data.append('amount',product.product_cost)
      data.append('phone',phone)

      const response=await axios.post('http://tarayia.alwaysdata.net/api/mpesa_payment',data)
      console.log('The response is',response)
      setSuccess(response.data)
      setLoading('')
    } catch (error) {
      setError(error.message)
      setLoading('')
      
    }
  }


  return (
    <div className='row justify-content-center'>
      <h1>Make payments-Lipa na Mpesa</h1>
      <p className='text-success'>{product.product_name}</p>
      <p className='text-warning'>{product.product_cost}</p>
      <p className='text-danger'>{error}</p>
      <p className='text-warning'>{loading}</p>
      <p className='text-success'>{success}</p>
      
    
    <div className='col-md-6 mt-4'>
      <form action="" onSubmit={submit}>


    <input type="tel" placeholder='Enter your phone number starting with 254' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    <br />
    <button className='btn bg-info form-control'>Make payments</button>
    </form>
    </div>
    
    
    </div>

  )
}

export default Mpesa