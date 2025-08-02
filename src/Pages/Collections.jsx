import React, { useContext, useMemo, useState } from 'react';
import ProductItems from "../Components/ProductItems";
import { ShopContext } from '../Context/ShopContext';

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [sortType, setSortType] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    switch (sortType) {
      case "Low-High":
        return filtered.sort((a, b) => a.price - b.price);
      case "High-Low":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [products, search, showSearch, sortType]);

  return (
    <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] min-h-screen px-6 sm:px-16 py-16 text-white">
      
      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight tracking-wide">
          Explore Our Collections
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover handpicked styles crafted for comfort, performance, and everyday inspiration.
        </p>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-8">
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="bg-[#1c1c1c] border border-gray-700 text-sm rounded-lg px-4 py-2 text-white focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="Low-High">Price: Low to High</option>
          <option value="High-Low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="bg-[#202020] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ProductItems
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
