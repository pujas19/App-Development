import React, { useState } from 'react';
import Navbar from './Navbar';

// Sample array of products
const products = [
  // ... (same product data as in your previous code)
];

function CartPage() {
  const [cart, setCart] = useState([]); // State to store cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gray-300 h-64 bg-cover bg-center relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <div className="text-xl font-bold text-gray-800 mb-2">
                  ₹{product.price.toFixed(2)}
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => addToCart(product)} // Add the product to the cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default CartPage;
