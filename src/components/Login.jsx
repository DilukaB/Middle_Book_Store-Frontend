import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [message, setMessage] = useState('');
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert('Login successful');
            navigate('/');
        } catch (error) {
            setMessage('Invalid email or password');
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert('Login successful');
            navigate('/');
        } catch (error) {
            alert('Google sign-in failed');
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 ">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full border rounded-lg py-2 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            {...register('password', { required: 'Password is required' })}
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full border rounded-lg py-2 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <p className="text-red-500 text-sm">{message}</p>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 hover:text-blue-700">
                        Register here
                    </Link>
                </p>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg"
                    >
                        <FcGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
