import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  return (
    <div className="grid place-items-center">
      <div className="text-white text-4xl my-11">Login</div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 grid place-items-center">
        <p className="text-red-600 my-3">{error}</p>
        <div className="p-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-3"
            htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
            value={username}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleClick}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );

  async function handleClick(e: any) {
    e.preventDefault();

    try {
      const res = await axios.post('/api/login', {
        username,
        password,
      });
      props.authState(res.data.auth);
      props.adminState(res.data.admin);
      props.approvedState(res.data.approved);
    } catch (err: any) {
      setError('Username or password is incorrect');
      return;
    }

    navigate('/');
  }
};

export default Login;
