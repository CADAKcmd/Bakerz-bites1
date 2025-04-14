import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert('Login successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Bakery Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-black text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-black text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-black">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-black underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
