import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const GetProducts = () => {
  const [loading,setLoading]=useState('')
  const [error,setError]=useState('')

  // store all the products we have
  const [products,setProducts]=useState([])

  const navigate=useNavigate()

  const image_url='http://tarayia.alwaysdata.net/static/images/'
  // CREATE A FUNCTION TO GET OUR PRODUCTS FROM api
  const fetchProducts=async()=>{
    setLoading('Please wait as we retrieve your products')
    try {
      const response=await axios.get('http://tarayia.alwaysdata.net/api/getproductdetails')
     
      setProducts(response.data)
      setLoading('')
    } catch (error) {
      setLoading('')
      setError(error.message)
      
    }
  }

  //end  of function to call the useeffect
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className='row'>
        <h1>Available Products</h1>

        <p className='text-danger'>{error}</p>
        <p className='text-warning'>{loading}</p>
        {/* loop through our product */}
        {/* dot map --javascript object that allows you to Itterate over each product  and display it one by one */}
        {products.map((product)=>(

        

       

         
         

        <div className='col-md-4 justify-content-center '>
          <div className='card shadow m-4'>
          <img src={image_url+ product.product_photo} alt="cake" className='product_img mt-4'/>

          <div className='card-body'>
            <h4 className='text-success'  >{product.product_name}</h4>
            <p className='text-secondary'>{product.product_description}.</p>
            <p className='text-warning'>{product.product_cost}</p>
             <input  type="submit" className='btn bg-info  form-control w-100 ' value='Purchase Now' onClick={() => navigate('/mpesa', { state: { product } })} />

          </div>

        </div>
    
          </div>
    ))}
    </div>
  )
}

export default GetProducts