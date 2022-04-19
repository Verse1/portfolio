import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  return (
    <div className="grid place-items-center">
      <div className="text-white text-5xl grid place-items-center mt-60 mb-10">
        Register
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 grid place-items-center">
        <p className="text-red-600 my-3">{error}</p>

        <div className="p-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-3"
            htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <div className="flex items-center justify-between mt-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={clickHandler}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  async function clickHandler(e: any) {
    e.preventDefault();

    if (password !== confirm) {
      setPassword('');
      setConfirm('');
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setPassword('');
      setConfirm('');
      setError('Password must be at least 8 characters long');
      return;
    }
    if (username.length < 3) {
      setUsername('');
      setError('Username must be at least 3 characters long');
      return;
    }

    try {
      const res = await axios.post('/api/register', {
        username,
        email,
        password,
      });
    } catch (err: any) {
      setError('Username or email already exists');
      return;
    }

    window.location.href = '/login';
  }
};

export default Register;
