import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
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

  return (
    <div className="home-page">

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">PetHub</Link>
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
                  <li><a className="dropdown-item" href="#!" onClick={() => {}}>Dogs</a></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => {}}>Cats</a></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => {}}>Birds</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#!" onClick={() => {}}>All Products</a></li>
                </ul>
              </li>
            </ul>
            <Link to="/addproducts" className="btn btn-outline-danger me-2">Add Pet</Link>
            <Link to="/signup" className="btn btn-outline-warning">Create Account</Link>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <div className="container">
        <h3 className="text-center mb-4">All Products</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        {loading && <p className="text-warning text-center">{loading}</p>}
        {!loading && products.length === 0 && <h5 className="text-center text-muted">No products found</h5>}

        <div className="row">
          {products.map((product, index) => (
            <div key={product.id || index} className="col-md-4 mb-4">
              <div className="card product-card h-100 shadow">
                <img src={image_url + product.product_photo} alt={product.product_name} className="card-img-top product-img"/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text flex-grow-1">{product.product_description}</p>
                  <p className="text-warning fw-bold">KES {product.product_cost}</p>
                  <button className="btn btn-info hover-btn w-100 mt-auto" onClick={() => navigate('/mpesa', { state: { product }})}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="text-primary mb-3">About Tara Pet Store</h2>
          <p className="lead mb-4">
            We are dedicated to providing healthy pets and care services. 
            Explore our wide range of pet food, accessories, and products to keep your pets happy and healthy.
          </p>
          <Link to="/aboutus" className="btn btn-outline-light btn-lg">Learn More</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center p-4 mt-4 rounded">
        <b className="text-white">Developed by Tarayia &copy; All rights reserved</b>
      </footer>

      {/* Extra Styling */}
      <style>{`
        .carousel-img {
          height: 400px;
          object-fit: cover;
        }
        .product-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .hover-btn {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hover-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }
        .product-img {
          object-fit: cover;
          height: 250px;
        }
      `}</style>
    </div>
  );
};

export default Home;