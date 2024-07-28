import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Signin } from '../Exports';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous errors
    try {
      console.log("Creating account with data:", formData);
      await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: formData.name
      });
      navigate('/Signin');
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message);
    }
  };

  return (
    <section className="bg-white">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            {/* logo goes here */}
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-base text-center text-black">
            Already have an account?{' '}
            <Link
              to="/Signin"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-black">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-black">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-black">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-200 rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-white/80 active:border-gray-200"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
              {error && <p className="mt-2 text-center text-red-600">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
