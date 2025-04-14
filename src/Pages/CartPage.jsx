import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          Your cart is empty.
          <Link to="/shop" className="block text-yellow-500 mt-2 underline">
            Back to Shop
          </Link>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>Qty: {item.qty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-500">${(item.price * item.qty).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-yellow-600 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
