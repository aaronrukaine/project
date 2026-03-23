import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPet, setFilterPet] = useState(""); // For Shop By Pet
  const navigate = useNavigate();
  const image_url = "http://tarayia.alwaysdata.net/static/images/";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading("Loading products...");
      try {
        const res = await axios.get("http://tarayia.alwaysdata.net/api/getproductdetails");
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading("");
      } catch (err) {
        setError(err.message);
        setLoading("");
      }
    };
    fetchProducts();
  }, []);

  // Filtered products based on search and pet type
  const displayedProducts = products.filter(product => {
    const matchesSearch =
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPet = filterPet ? product.pet_type?.toLowerCase() === filterPet.toLowerCase() : true;
    return matchesSearch && matchesPet;
  });

  return (
    <div className="home-page">

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded-3 shadow-sm">
          {["/img/yjpg.webp","/img/ctabanner1.jpg.webp","/img/dam.jpg","/img/dod.jpg"].map((src, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={src} className="d-block w-100 carousel-img" alt={`slide${i+1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5 shadow-sm rounded">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">PetHub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown">
                  Shop By Pet
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#!" onClick={() => setFilterPet("Dog")}>Dogs</a></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => setFilterPet("Cat")}>Cats</a></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => setFilterPet("Bird")}>Birds</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => setFilterPet("")}>All Products</a></li>
                </ul>
              </li>
            </ul>
            <Link to="/addproducts" className="btn btn-danger me-2 fw-bold px-4">Add Pet</Link>
            <Link to="/signup" className="btn btn-warning text-dark fw-bold px-4">Create Account</Link>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <div className="container mb-5">
        <h3 className="text-center mb-4">All Products</h3>

        {/* Search Bar */}
        <div className="mb-4 d-flex justify-content-center">
  <div className="search-wrapper w-50 position-relative">
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <br />
    <span className="search-icon">
      
    </span>
  </div>
</div>

        {error && <p className="text-danger text-center">{error}</p>}
        {loading && <p className="text-warning text-center">{loading}</p>}
        {!loading && displayedProducts.length === 0 && <h5 className="text-center text-muted">No products found</h5>}

        <div className="row">
          {displayedProducts.map((product, index) => (
            <div key={product.id || index} className="col-md-4 mb-4">
              <div className="card product-card h-100 shadow-sm rounded">
                <img src={image_url + product.product_photo} alt={product.product_name} className="card-img-top product-img"/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.product_name}</h5>
                  <p className="card-text flex-grow-1">{product.product_description}</p>
                  <p className="text-warning fw-bold">KES {product.product_cost}</p>
                  <button 
                    className="btn btn-info hover-btn w-100 mt-auto fw-semibold"
                    onClick={() => navigate('/mpesa', { state: { product }})}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="text-primary mb-3 fw-bold">About Tara Pet Store</h2>
          <p className="lead mb-4">
            We are dedicated to providing healthy pets and care services. 
            Explore our wide range of pet food, accessories, and products to keep your pets happy and healthy.
          </p>
          <Link to="/aboutus" className="btn btn-outline-light btn-lg fw-bold">Learn More</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center p-4 mt-4 rounded shadow-sm">
        <b className="text-white">Developed by Tarayia &copy; All rights reserved</b>
      </footer>

      {/* Extra Styling */}
      <style>{`
        .carousel-img {
          height: 450px;
          object-fit: cover;
        }
        .product-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
        }
        .hover-btn {
          transition: transform 0.3s, box-shadow 0.3s;
          padding: 12px 0;
          font-size: 1rem;
        }
        .hover-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        }
        .product-img {
          object-fit: cover;
          height: 280px;
        }
      `}</style>
    </div>
  );
};

export default Home;