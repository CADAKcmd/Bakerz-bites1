import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up:', { email, password });
    alert('Sign-up successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-500 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Create Bakery Account</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-black text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-black">
          Already have an account?{' '}
          <Link to="/login" className="text-black underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
