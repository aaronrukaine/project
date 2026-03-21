import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import AddProducts from './AddProducts';
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


       <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/home">PetHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-pet">
                Shop By Pet
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/cat">Cat</Dropdown.Item>
                <Dropdown.Item href="#kitten">Kitten</Dropdown.Item>
                <Dropdown.Item href="#dog">Dog</Dropdown.Item>
                <Dropdown.Item href="#puppy">Puppy</Dropdown.Item>
                <Dropdown.Item href="#bird">Bird</Dropdown.Item>
                <Dropdown.Item href="#rabbit">Rabbit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

           

            <Nav.Link href="#offers" className="ms-2">Offers</Nav.Link>
            <Nav.Link href="#new" className="ms-2">New Arrivals</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Nav>
            <Nav.Link href="#account"><i className="bi bi-person"></i></Nav.Link>
            <Nav.Link href="#cart"><i className="bi bi-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      



 {/* Heading (replacing marquee) */}
      <div className="bg-dark text-center py-2">
        <marquee className="text-white" behavior="" direction="">Welcome to Tara Pet Store!</marquee>
        
      </div>

      {/* Carousel */}
      <section className="row">
        <div className="col-md-12">

          <div id="carousel" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="/img/ctabanner1.jpg.webp"
                  alt=""
                  className="w-100 d-block"
                  height="400px"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/img/dod.jp"
                  alt=""
                  className="w-100 d-block"
                  height="400px"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/img/dam.jpg"
                  alt=""
                  className="w-100 d-block"
                  height="400px"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/img/yjpg.webp"
                  alt=""
                  className="w-100 d-block"
                  height="400px"
                />
              </div>

            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-danger"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-danger"></span>
            </button>

          </div>

        </div>
      </section>







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