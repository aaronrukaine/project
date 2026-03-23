// Cat.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cat = () => {
  const [catProducts, setCatProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  return (
    <div className="col-md-4 mb-3">
      <h2>Cat Products</h2>

      <div className="card shadow-sm h-100">
       
          <img
            src='/img/3.avif'
            className="card-img-top"
            alt=''
            style={{ height: "200px", objectFit: "cover" }}
          />
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title"></h5>
          <p className="card-text flex-grow-1"> CAT</p>
          <p className="mb-1">
            
          </p>
          <p className="mb-2">
           
          </p>
          <button className="btn btn-primary mt-auto">Buy Now</button>
        </div>
      </div>      
       
      
    </div>
  );
};

export default Cat;