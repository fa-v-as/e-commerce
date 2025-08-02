import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItems from "./ProductItems";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!products.length || !category || !subCategory) return;

    const filteredProducts = products
      .filter((item) => item.category === category && item.subCategory === subCategory)
      .slice(0, 5);

    setRelated(filteredProducts);
  }, [products, category, subCategory]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Section Title */}
      <div className="text-center text-4xl font-extrabold text-gray-900 pb-8 uppercase tracking-wide">
        Similar Products
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.length > 0 ? (
          related.map((item) => (
            <div
              key={item._id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProductItems id={item._id} name={item.name} price={item.price} image={item.image} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No similar products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
