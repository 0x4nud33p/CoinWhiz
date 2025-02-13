import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from 'sonner';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [formError, setFormError] = useState(null);

  const BASE_URL = import.meta.env.VITE_NODE_ENV === 'production' ? 'https://coinwhiz.onrender.com' : `${import.meta.env.VITE_API_URL}`;
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData.email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setFormError(emailRegex.test(formData.email) ? null : "Please enter a valid email address");
  }, [formData.email]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (formError) return;

    setIsLoading(true);
    try {
      const { data, status } = await axios.post(`${BASE_URL}/api/auth/signup`, {
        username: formData.fullname,
        email: formData.email,
        password: formData.password,
      });

      if (status === 201) {
        toast.success("Signup successful! Please Login");
        navigate('/signin');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [formData, formError, navigate]);

  const buttonClasses = useMemo(() => 
    `w-full py-2 px-4 font-medium text-white rounded ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"}`, 
    [isLoading]
  );

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex justify-center items-center">
      <Toaster />
      <div className="max-w-sm w-full space-y-6 p-4 bg-gray-800 shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-400">Already a User? 
            <Link to="/signin" className="text-blue-500 ml-1">Sign In For Testing</Link>
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block font-medium">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter Fullname"
              required
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded"
            />
            {formError && <p className="text-red-500 text-sm mt-1">{formError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 text-black border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-2 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button className={buttonClasses} type="submit" disabled={isLoading} aria-busy={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
