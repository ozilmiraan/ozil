import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleArtistLogin = () => {
        navigate('/dashboard');
    };

    const handleClientLogin = () => {
        console.log('Client login');
    };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <div className="w-full max-w-sm mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" type="button" onClick={handleClientLogin}>
              Client Login
            </button>
            <button className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleArtistLogin}>
              Artist Login
            </button>
          </div>
           <div className="mt-4 text-center">
            <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-dark" href="/register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
