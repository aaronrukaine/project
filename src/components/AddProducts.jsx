
import React, { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
    const[product_name, setProductname]=useState("")
  const[product_description, setProductdescription]=useState("")
  const[product_cost, setProductcost]=useState("")
  const[product_photo, setProductphoto]=useState("")


  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const submit = async(e)=>{
    e.preventDefault()
    setLoading('Please wait')

    try{ 
    const data = new FormData()

      data.append("product_name",product_name )
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post('http://tarayia.alwaysdata.net/api/addproducts',data)


      setLoading("")
      setSuccess(response.data.message)
      setProductname('')
      setProductdescription('')
      setProductcost('')
      setProductphoto("")
    }
     catch (error) {

      setLoading('')
      setError(error.message)
      
    }
  }


  return (
    
    <div className='row justify-content-center  '>
      <div className='col-md-6 card shadow '>
        <h1>Upload Products</h1>
        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>

          <input type="text" placeholder='Enter Product Name'className='form-control' required onChange={(e)=>setProductname(e.target.value)} value={product_name}/>
          <br />
          <br />

          <input type="text area" placeholder='Describe your product'className='form-control' required onChange={(e)=>setProductdescription(e.target.value)} value={product_description}/>
          <br />
          <br />

          <input type="number" placeholder='Enter Product Cost'className='form-control'required onChange={(e)=>setProductcost(e.target.value)}value={product_cost}/>
          <br />
          <br />


          <b>Upload Product photo</b>
          <input type="file" className='form-control' required onChange={(e)=>setProductphoto(e.target.files[0])} accept='image*'/>
          <br />
          <br />
          <input type="submit" value='Upload product' className='btn bg-info text-white w-100 form-control' required />





        </form>



      </div>
        
        

    </div>
  )
}

export default AddProducts