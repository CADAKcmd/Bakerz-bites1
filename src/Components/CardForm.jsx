import React, { useState, useEffect } from 'react';

const CardForm = ({ setValid }) => {
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  });

  useEffect(() => {
    const isValid =
      cardInfo.number.length === 16 &&
      cardInfo.name.trim() !== '' &&
      /^\d{2}\/\d{2}$/.test(cardInfo.expiry) &&
      /^\d{3}$/.test(cardInfo.cvc);

    setValid(isValid);
  }, [cardInfo, setValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Card Number</label>
        <input
          type="text"
          name="number"
          maxLength={16}
          value={cardInfo.number}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Cardholder Name</label>
        <input
          type="text"
          name="name"
          value={cardInfo.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="John Doe"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium">Expiry (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            value={cardInfo.expiry}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="12/25"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">CVC</label>
          <input
            type="text"
            name="cvc"
            value={cardInfo.cvc}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="123"
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default CardForm;
