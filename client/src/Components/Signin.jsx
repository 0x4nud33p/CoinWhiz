import axios from "axios";
import { Toaster, toast } from "sonner";
import { useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    setFormError(null);
    return true;
  }, [formData.email]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const loadingToast = toast.loading("Signing in...");
      setIsLoading(true);

      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData);
        toast.dismiss(loadingToast);
        toast.success("Sign in successful");
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } catch (error) {
        toast.dismiss(loadingToast);
        const errorMessage = error.response?.data?.message || "An error occurred during sign-in. Please try again.";
        toast.error(errorMessage);
        setFormError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, validateForm, navigate]
  );

  const buttonClasses = useMemo(
    () =>
      `w-full py-2 px-4 font-medium text-white rounded ${
        isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
      }`,
    [isLoading]
  );

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
      <Toaster />
      <div className="max-w-md w-full space-y-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-400">
            Not a User? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
          </p>
        </div>
        {!isLoading && (
          <div className="bg-gray-700 text-gray-300 p-4 rounded-lg text-center mb-4">
            <h2 className="font-bold text-xl mb-2">Guest Credentials for Testing</h2>
            <p>Email: <strong className="text-blue-400">guest123@gmail.com</strong></p>
            <p>Password: <strong className="text-blue-400">guest@123</strong></p>
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded"
            />
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
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          <button className={buttonClasses} type="submit" disabled={isLoading} aria-busy={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}