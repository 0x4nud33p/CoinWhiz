import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../Exports.js';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      await authService.login({ email, password });
      navigate('/Home');
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <section className="bg-[#080c0e]">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            {/* logo goes here */}
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-[#68007a]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-[#68007a]">
            Don&apos;t have an account?{' '}
            <Link
              to="/Signup"
              title=""
              className="font-medium text-[#68007a] transition-all duration-200 hover:underline"
            >
              create a free account
            </Link>
          </p>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignin();
            }}
          >
            <div className="space-y-5">
              {error && <p className="text-sm text-center text-red-600">{error}</p>}
              <div>
                <label htmlFor="email" className="text-base font-medium text-[#68007a]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-[#68007a]">
                    Password
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-[#68007a] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-[#68007a] rounded-md placeholder:text-[#68007a] focus:outline-none focus:ring-1 focus:ring-[#68007a] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#68007a] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#68007a]/80 active:border-[#68007a]"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
