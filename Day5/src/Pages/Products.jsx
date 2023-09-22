import React from 'react';
import Navbar from './Navbar';

// Sample array of products
const products = [
  {
    id: 1,
    name: 'Basmati Rice 1kg',
    price: 80,
    description: 'India gate basmati rice 1kg',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/243337_2-india-gate-basmati-rice-tibar.jpg/400x400',
  },
  {
    id: 2,
    name: 'French Fries',
    price: 50,
    description: 'McCain French Fries, 200 g Pouch',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/30000369_6-mccain-french-fries.jpg/400x400',
  },
  {
    id: 3,
    name: 'Brownie',
    price: 20,
    description: 'Britannia Fudge It Brownie - Chocolate, 40 g',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40204406_1-britannia-chocolate-brownie.jpg/400x400',
  },
  {
    id: 4,
    name: 'Maaza',
    price: 65,
    description: 'Maaza Mango Drink - Original Flavour, Refreshing, 1.2kg',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/265695_19-maaza-mango-drink.jpg/400x400',
  },
  {
    id: 5,
    name: 'HIT Anti Mosquito Racquet',
    price: 600,
    description: 'Rechargeable Insect Killer Bat With LED Light, 1 pc',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40174570_2-hit-anti-mosquito-racquet-rechargeable-insect-killer-bat-with-led-light.jpg/400x400',
  },
  {
    id: 6,
    name: 'Induction Tawa',
    price: 399,
    description: 'Nirlon Induction Base Non-Stick Flat/Dosa Tawa',
    imageUrl: 'https://www.theindusvalley.in/cdn/shop/files/Cast-Iron-Dosa-Tawa-With-Handle-10-inch.jpg?v=1694758481/400x400',
  },
  {
    id: 7,
    name: 'Body Lotion',
    price: 99,
    description: 'Himalaya Baby Lotion - With Almond Oil & Olive Oil',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40013478_7-himalaya-baby-baby-lotion.jpg/400x400',
  },
  {
    id: 8,
    name: 'Babies Pampers',
    price: 999,
    description: 'Pampers Diaper Pants - Large, 64 pcs',
    imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40128515_10-pampers-diaper-pants-large.jpg/400x400',
  },
];

function Product() {
  return (
    <>
    <Navbar/>
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Product;
