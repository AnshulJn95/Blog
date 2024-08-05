import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [serverError, setServerError] = useState('');

    const login = async (data) => {
        setServerError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setServerError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-200'>
            <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-10 border border-gray-300'>
                <div className='flex justify-center mb-6'>
                    <Logo width='120px' />
                </div>
                <h2 className='text-center text-3xl font-extrabold text-gray-800 mb-2'>
                    Sign in to your account
                </h2>
                <p className='text-center text-base text-gray-600 mb-6'>
                    Don’t have an account?{' '}
                    <Link to='/signup' className='text-blue-600 font-semibold hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {serverError && <p className='text-red-600 text-center mb-4'>{serverError}</p>}
                <form onSubmit={handleSubmit(login)} className='space-y-6'>
                    <div className='relative'>
                        <Input
                            label='Email'
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Email address must be a valid address'
                                }
                            })}
                            error={errors.email?.message}
                            className='w-full'
                        />
                        {errors.email && (
                            <span className='absolute right-0 top-full text-red-500 text-sm'>
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className='relative'>
                        <Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', {
                                required: 'Password is required'
                            })}
                            error={errors.password?.message}
                            className='w-full'
                        />
                        {errors.password && (
                            <span className='absolute right-0 top-full text-red-500 text-sm'>
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <Button type='submit' className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold'>
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
