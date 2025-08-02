import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItems from './ProductItems';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      setBestSeller(products.filter((product) => product.bestSeller));
    }
  }, [products]);

  return (
    <section className="bg-[#0f172a] min-h-screen py-16 px-6 sm:px-12 text-white">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Best Sellers</h2>
        <p className="mt-2 text-gray-400 text-base sm:text-lg">
          Handpicked favorites from our top customers
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSeller.length > 0 ? (
          bestSeller.map((product) => (
            <div
              key={product._id}
              className="bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ProductItems
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full mt-10">
            No Best Sellers Available
          </p>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
