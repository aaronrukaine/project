import React from "react";

const Dropdowns = ({ categories }) => {
  if (!categories) return null; // Safety check

  return (
    <div className="mt-4">
      <h3>Product Dropdowns</h3>
      {Object.keys(categories).map((cat) => (
        <div key={cat} className="mb-3">
          <label>{cat.charAt(0).toUpperCase() + cat.slice(1)}:</label>
          <select className="form-control">
            <option value="">Select {cat}</option>
            {categories[cat].map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Dropdowns;