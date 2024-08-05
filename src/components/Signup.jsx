import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-xl">
        <div className="mb-4 flex justify-center">
          <Logo width="120px" />
        </div>
        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-4">Create Your Account</h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="space-y-4">
          <div className="relative">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              className="bg-gray-50 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 w-full py-2 px-3 pr-9"
            />
          </div>
          <div className="relative">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="bg-gray-50 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 w-full py-2 px-3 pr-9"
            />
          </div>
          <div className="relative">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="bg-gray-50 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 w-full py-2 px-3 pr-9"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out rounded-md">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;