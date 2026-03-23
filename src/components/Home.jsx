import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

const GetProducts = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("") // ADDED
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const image_url = 'http://tarayia.alwaysdata.net/static/images/'

  const fetchProducts = async () => {
    setLoading("Loading products...")
    try {
      const res = await axios.get('http://tarayia.alwaysdata.net/api/getproductdetails')

      console.log("API DATA:", res.data) // DEBUG

      setProducts(Array.isArray(res.data) ? res.data : [])
      setLoading("")
    } catch (err) {
      setError(err.message)
      setLoading("")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // FULL FILTER (CATEGORY + SEARCH)
  const filteredProducts = products.filter((p) => {
    const category =
      (p.category ||
        p.category_name ||
        p.product_category ||
        "")
        .toString()
        .toLowerCase()

    const name = (p.product_name || "").toLowerCase()
    const description = (p.product_description || "").toLowerCase()
    const search = searchTerm.toLowerCase()

    return (
      (selectedCategory ? category === selectedCategory.toLowerCase() : true) &&
      (
        name.includes(search) ||
        description.includes(search) ||
        category.includes(search)
      )
    )
  })

  return (
    <div>

      

       {/*  CAROUSEL (NOW CLOSED PROPERLY) */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src="/img/yjpg.webp" className="d-block w-100" height="400" alt="slide1" />
          </div>

          <div className="carousel-item">
            <img src="/img/ctabanner1.jpg.webp" className="d-block w-100" height="400" alt="slide2" />
          </div>

          <div className="carousel-item">
            <img src="/img/dam.jpg" className="d-block w-100" height="400" alt="slide3" />
          </div>

           <div className="carousel-item">
            <img src="/img/dod.jpg" className="d-block w-100" height="400" alt="slide3" />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div> {/*  THIS WAS MISSING */}

      {/*  NAVBAR */}
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <Navbar.Brand>PetHub</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>

            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle>
                  Shop By Pet
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {["Cat","Food"].map(cat => (
                    <Dropdown.Item
                      key={`/cat/${cat.toLowerCase()}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Dropdown.Item>
                  ))}

                  <Dropdown.Divider />

                  <Dropdown.Item onClick={() => setSelectedCategory("")}>
                    All Products
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              
            </Nav>

            {/*  WORKING SEARCH */}
            <Form className="d-flex ms-3">
              <FormControl 
                placeholder="Search products..."
                style={{ width: "250px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>

            <Link to="/addproducts" className="btn btn-dark ms-3">
              Add Product
            </Link>
            <br />
            <Link to='/signup'className='btn btn-dark text-white  px-4 py-2" m-7 btn-outline-warning'>SignUP NOW</Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* PRODUCTS */}
      <div className="row">
        <h3 className="text-center mt-3">
          {selectedCategory ? `${selectedCategory} Products` : "All Products"}
        </h3>

        <p className="text-danger text-center">{error}</p>
        <p className="text-warning text-center">{loading}</p>

        {filteredProducts.length === 0 && !loading && (
          <h5 className="text-center text-muted mt-4">
            No products found
          </h5>
        )}

        {filteredProducts.map((product, index) => (
          <div key={product.id || index} className="col-md-4">
            <div className="card m-3 shadow">

              <img
                src={image_url + product.product_photo}
                alt=""
                height="200"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p>{product.product_description}</p>

                <p className="text-warning">
                  KES {product.product_cost}
                </p>

                <button
                  className="btn btn-info w-100"
                  onClick={() =>
                    navigate('/mpesa', { state: { product } })
                  }
                >
                  Buy Now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default GetProducts;

