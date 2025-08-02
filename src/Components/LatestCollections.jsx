import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItems from './ProductItems';

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      setLatestProducts(products.slice(0, 12));
    }
  }, [products]);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 sm:py-24 px-6 sm:px-12 animate-fade-in-up">
      
      {/* Clean Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wide text-white font-['Playfair Display']">
          Latest Collections
        </h2>
        <p className="text-gray-400 mt-3 text-lg sm:text-xl font-light">
          Curated just for you — explore the freshest arrivals today.
        </p>
      </div>

      {/* Product Grid */}
      {latestProducts.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {latestProducts.map((product) => (
            <div
              key={product._id}
              className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#2c2c2c] rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ProductItems
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No products available</p>
      )}

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <a
          href="#shop"
          className="bg-[#4169E1] hover:bg-[#5f7fff] text-white text-lg sm:text-xl font-semibold px-12 py-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-110 tracking-wide"
        >
          Explore Full Collection
        </a>
      </div>
    </section>
  );
};

export default LatestCollections;
;
