import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [product_name, setProductname] = useState("");
  const [product_description, setProductdescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState(null);

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

      if (product_photo) {
        data.append("product_photo", product_photo);
      }

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

    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading("");
    }
  };

  return (
    <div className="col-md-6 mx-auto card p-3 shadow mt-3">
      <h4 className="text-center">Upload Pet</h4>

      <form onSubmit={submit} className="bg-dark p-3 text-white rounded">

        <p className="text-warning">{loading}</p>
        <p className="text-success">{success}</p>
        <p className="text-danger">{error}</p>

        {/* Product Name */}
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          value={product_name}
          onChange={(e) => setProductname(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          className="form-control mb-2"
          placeholder="Product Description"
          value={product_description}
          onChange={(e) => setProductdescription(e.target.value)}
          required
        />

        {/* Cost */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Product Cost"
          value={product_cost}
          onChange={(e) => setProductcost(e.target.value)}
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setProductphoto(e.target.files[0])}
        />

        {/* Button */}
        <button
          className="btn btn-info w-100 py-2 fw-bold text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>

      </form>
    </div>
  );
};

export default AddProducts;