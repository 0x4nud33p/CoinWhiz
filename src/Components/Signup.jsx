import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Client, Account, ID } from 'appwrite';
import CoinWhizLogo from './ui/CoinWhizLogo';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  // Initialize Appwrite Client
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66540918000ca5b96681');
  const account = new Account(client);

  // Handle form submission
  const create = async (data) => {
    setError(null);
    try {
      // Create account
      const userAccount = await account.create(ID.unique(), data.email, data.password, data.name);
      if (userAccount) {
        // Log in the user
        const session = await account.createEmailPasswordSession(data.email, data.password);
        console.log(session);
        navigate('/Signin');
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message || "An error occurred while signing up.");
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
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(create)} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-black">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="text-black flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-black">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full text-black h-10 px-3 py-2 text-sm bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Email address must be a valid address"
                      }
                    })}
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
                    className="flex w-full text-black h-10 px-3 py-2 text-sm bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-800 active:border-gray-900"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
