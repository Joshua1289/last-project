import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [data, setData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        console.log('Login data:', data); // Log data to check request structure

        try {
            const response = await axios.post('http://localhost:5000/auth/login', data);
            console.log('Response:', response.data.message);
            navigate('/homepage');
            alert('Successfully logged in');
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response);
                const errorMessage = error.response.data.message || 'An unexpected error occurred';
                setError(errorMessage);
                alert(errorMessage);
            } else {
                console.error('Error:', error);
                setError('An unexpected error occurred');
                alert('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col bg-white w-96 shadow-md p-8 rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold mb-4">LOGIN NOW</h1>
                {error && <div className="bg-red-600 text-white p-2 rounded mb-4">{error}</div>}
                <input
                    className="w-full h-12 px-4 mb-4 rounded border border-gray-300 focus:border-violet-800"
                    type="text"
                    placeholder="Enter Your email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
                <div className="relative">
                    <input
                        className={`w-full h-12 px-4 mb-4 rounded border ${error ? 'border-red-600' : 'border-gray-300'} focus:outline-none focus:border-violet-800`}
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Enter Your Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button
                    className="bg-violet-800 text-white h-10 w-full rounded hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
                    type="submit"
                >
                    Login Now
                </button>
                <Link to="/Register" className="text-violet-800">
                    <p className="mt-4 text-center">Don't have an account? Register Now</p>
                </Link>
            </form>
        </div>
    );
}

export default Login;
