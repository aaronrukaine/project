import React, { useState } from "react";
import AddProducts from "./components/AddProducts";
import Dropdowns from "./components/Dropdowns";
import { useState } from "react";

const App = () => {
  const [categories, setCategories] = useState({
    electronics: [],
    clothing: [],
    books: [],
  });

  return (
    <div>
      <h1>Product Manager</h1>

      <AddProducts categories={categories} setCategories={setCategories} />
      <Dropdowns categories={categories} />
    </div>
  );
};

export default App;