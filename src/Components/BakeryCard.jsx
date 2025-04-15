import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const BakeryCard = ({ item }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item);
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-2xl pb-4 px-4 shadow-md hover:shadow-lg transition h-[350px] flex flex-col justify-between">
      <img src={item.image} alt={item.title} className="h-44 w-4/5 self-center" />
      <h3 className="mt-4 text-lg font-semibold">{item.title}</h3> {/* 👈 Keep title if that's what your data has */}
      <p className="text-black">${item.price.toFixed(2)}</p>
      <p className="text-yellow-500">⭐ {item.rating?.rate}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-xl"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BakeryCard;
