import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { MdDeleteOutline } from 'react-icons/md';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0 || !cartItems) {
      setCartData([]);
      return;
    }

    const temp = [];

    Object.entries(cartItems).forEach(([productId, sizeMap]) => {
      Object.entries(sizeMap).forEach(([size, quantity]) => {
        if (quantity > 0) {
          temp.push({ _id: productId, size, quantity });
        }
      });
    });

    setCartData(temp);
  }, [cartItems, products]);

  const handleQuantityChange = (id, size, value) => {
    const val = parseInt(value);
    if (isNaN(val) || val < 1) return;
    updateQuantity(id, size, val);
  };

  const handleDelete = (id, size) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      updateQuantity(id, size, 0);
    }
  };

  return (
    <div className='bg-[#f9f9f9] min-h-screen border-t pt-14 px-4 sm:px-8'>
      {/* Title */}
      <div className='text-2xl font-semibold mb-6 text-gray-800'>
        <Title text1='YOUR' text2='CART' />
      </div>

      {/* Cart Items */}
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            return (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm mb-4 p-4 flex items-center justify-between flex-wrap sm:grid sm:grid-cols-[4fr_1fr_0.5fr] gap-4 border'
              >
                <div className='flex items-start gap-4'>
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className='w-16 sm:w-20 rounded-md object-cover'
                  />
                  <div>
                    <p className='text-sm sm:text-base font-medium text-gray-700'>
                      {product.name}
                    </p>
                    <div className='flex items-center gap-3 mt-1 flex-wrap'>
                      <p className='text-sm text-gray-600'>
                        {currency}
                        {product.price} × {item.quantity} ={' '}
                        <span className='font-semibold'>
                          {currency}
                          {(product.price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                      <span className='text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded'>
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                <input
                  type='number'
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, item.size, e.target.value)
                  }
                  className='border border-gray-300 rounded px-2 py-1 w-16 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
                />

                <MdDeleteOutline
                  aria-label='Remove item'
                  onClick={() => handleDelete(item._id, item.size)}
                  style={{ fontSize: '24px' }}
                  className='text-red-500 hover:text-red-600 cursor-pointer'
                />
              </div>
            );
          })
        ) : (
          <div className='text-center mt-20'>
            <img
              src='/images/empty-cart.svg'
              alt='Empty Cart'
              className='mx-auto w-40 h-40 mb-6'
            />
            <p className='text-gray-600 text-lg mb-4'>Your cart is currently empty.</p>
            <button
              onClick={() => navigate('/')}
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm'
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      {/* Cart Total & Checkout */}
      {cartData.length > 0 && (
        <div className='flex justify-end my-10'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button
                onClick={() => navigate('/placeorder')}
                className='bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded px-6 py-3 mt-6'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
