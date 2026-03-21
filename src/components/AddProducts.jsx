import React, { useState } from "react";
import axios from "axios";

const AddProducts = ({ categories = [] }) => {
  const [product_name, setProductname] = useState("");
  const [product_description, setProductdescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // fallback categories (your screenshot ones)
  const fallbackCategories = [
    "Cat",
    "Kitten",
    "Dog",
    "Puppy",
    "Bird",
    "Rabbit"
  ];

  const submit = async (e) => {
    e.preventDefault();

    if (!selectedCategory) {
      setError("Please select a category");
      return;
    }

    try {
      setLoading("Uploading...");
      setError("");
      setSuccess("");

      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("category", selectedCategory);

      if (product_photo) {
        data.append("product_photo", product_photo);
      }

      const res = await axios.post(
        "http://tarayia.alwaysdata.net/api/addproducts",
        data
      );

      setSuccess(res.data.message || "Product uploaded successfully");

      // reset form
      setProductname("");
      setProductdescription("");
      setProductcost("");
      setProductphoto(null);
      setSelectedCategory("");

    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading("");
    }
  };

  // decide which categories to use
  const categoryList =
    categories.length > 0 ? categories : fallbackCategories;

  return (
    <div className="col-md-6 mx-auto card p-3 shadow">
      <h4 className="text-center">Upload Product</h4>

      {/* DEBUG */}
      <p className="text-muted">
        Categories loaded: {categoryList.length}
      </p>

      <form onSubmit={submit}>
        <p className="text-warning">{loading}</p>
        <p className="text-success">{success}</p>
        <p className="text-danger">{error}</p>

        {/* NAME */}
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          value={product_name}
          onChange={(e) => setProductname(e.target.value)}
          required
        />

        {/* DESCRIPTION */}
        <textarea
          className="form-control mb-2"
          placeholder="Product Description"
          value={product_description}
          onChange={(e) => setProductdescription(e.target.value)}
          required
        />

        {/* COST */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Product Cost"
          value={product_cost}
          onChange={(e) => setProductcost(e.target.value)}
          required
        />

        {/* IMAGE */}
        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setProductphoto(e.target.files[0])}
        />

        {/* CATEGORY DROPDOWN */}
        <select
          className="form-control mb-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>

          {categoryList.map((cat, index) => (
            <option
              key={cat.id || index}
              value={cat.id || cat}
            >
              {cat.name || cat}
            </option>
          ))}
        </select>

        {/* BUTTON */}
        <button
          className="btn btn-info w-100 text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;