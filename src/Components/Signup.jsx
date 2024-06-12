import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Signin } from '../Exports.js';

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
    <section className="bg-[#080c0e] font-mono">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            {/* logo goes here */}
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-[#68007a]">
            Sign up to create account
          </h2>
          <p className="mt-2 text-base text-center text-[#68007a]">
            Already have an account?{' '}
            <Link
              to="/Signin"
              title=""
              className="font-medium text-[#68007a] transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-[#68007a]">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-[#68007a]">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-[#68007a]">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#68007a] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#68007a]/80 active:border-[#68007a]"
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
