import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// import { authService } from '../Exports'; // Adjust the import as needed
import CoinWhizLogo from './ui/CoinWhizLogo';

function Signin() {
  const [formData, setFormData] = useState({
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
    setError(null); // Clear previous errors
    try {
      console.log("Signing in with data:", formData);
      await authService.signIn({
        email: formData.email,
        password: formData.password
      });
      navigate(''); // Adjust the navigation as needed
    } catch (error) {
      console.error("Signin error:", error);
      setError(error.message);
    }
  };

  return (
    <section className="bg-white">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            <CoinWhizLogo />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-base text-center text-black">
            Don't have an account?{' '}
            <Link
              to="/Signup"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-base font-medium text-black">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-900 active:border-black"
                >
                  Sign In <ArrowRight className="ml-2" size={16} />
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

export default Signin;
