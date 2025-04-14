import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CardForm from '../Components/CardForm';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const [method, setMethod] = useState('');
  const [cardValid, setCardValid] = useState(false);
  const navigate = useNavigate();

  const totalPrice = method === 'delivery' ? getTotal() + 20 : getTotal();

  const handleOrder = () => {
    if (method === 'card' && !cardValid) {
      alert('Please enter valid card details.');
      return;
    }
    alert(`Order placed successfully! Total: $${totalPrice.toFixed(2)}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-3">Select Payment Method</h2>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMethod('delivery')}
            className={`px-4 py-2 rounded-xl border ${method === 'delivery' ? 'bg-yellow-500 text-white' : 'bg-white'}`}
          >
            Pay on Delivery (+$20)
          </button>
          <button
            onClick={() => setMethod('card')}
            className={`px-4 py-2 rounded-xl border ${method === 'card' ? 'bg-yellow-500 text-white' : 'bg-white'}`}
          >
            Pay with Card
          </button>
        </div>

        {method === 'card' && <CardForm setValid={setCardValid} />}

        <div className="mt-6">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={handleOrder}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl w-full"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
