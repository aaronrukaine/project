import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [product_name, setProductname] = useState("");
  const [product_description, setProductdescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading("Uploading...");
      setError("");
      setSuccess("");

      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      if (product_photo) data.append("product_photo", product_photo);

      const res = await axios.post(
        "http://tarayia.alwaysdata.net/api/addproducts",
        data
      );

      setSuccess(res.data.message || "Product uploaded successfully");

      // Reset form
      setProductname("");
      setProductdescription("");
      setProductcost("");
      setProductphoto(null);
      setPreview(null);

    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading("");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProductphoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Upload Pet Product</h3>

        <form onSubmit={submit} className="bg-dark p-4 rounded text-white">

          {loading && <p className="text-warning text-center">{loading}</p>}
          {success && <p className="text-success text-center">{success}</p>}
          {error && <p className="text-danger text-center">{error}</p>}

          <input
            className="form-control mb-3 input-field"
            placeholder="Product Name"
            value={product_name}
            onChange={(e) => setProductname(e.target.value)}
            required
          />

          <textarea
            className="form-control mb-3 input-field"
            placeholder="Product Description"
            value={product_description}
            onChange={(e) => setProductdescription(e.target.value)}
            rows={3}
            required
          />

          <input
            type="number"
            className="form-control mb-3 input-field"
            placeholder="Product Cost"
            value={product_cost}
            onChange={(e) => setProductcost(e.target.value)}
            required
          />

          <input
            type="file"
            className="form-control mb-3 input-field"
            onChange={handlePhotoChange}
          />

          {preview && (
            <div className="text-center mb-3">
              <img src={preview} alt="Preview" className="img-preview rounded shadow" />
            </div>
          )}

          <button
            className="btn btn-info w-100 py-2 fw-bold hover-btn"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>

        <style>
          {`
            .input-field:focus {
              border-color: #007bff;
              box-shadow: 0 0 5px rgba(0,123,255,0.5);
            }
            .hover-btn {
              transition: all 0.3s ease;
            }
            .hover-btn:hover {
              transform: translateY(-3px) scale(1.02);
              box-shadow: 0 8px 15px rgba(0,0,0,0.2);
            }
            .img-preview {
              max-width: 100%;
              max-height: 200px;
              object-fit: cover;
              border: 2px solid #fff;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AddProducts;