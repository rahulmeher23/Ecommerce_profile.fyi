import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/AppIcons";

const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2]">
      <div className="fixed top-0 left-10 w-28 h-28">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex w-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Login Form */}
        <div className="flex flex-col justify-center items-center w-1/2 p-8 ">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F77D0A] text-white p-3 rounded hover:bg-[#d66f09] transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full bg-[#FF7F50] text-white p-3 rounded mt-2 hover:bg-[#e66e48] transition-colors"
            >
              Login as Test User
            </button>
          </form>
        </div>

        {/* Right side - Welcoming Message */}
        <div className="flex flex-col gap-3 justify-center items-center w-1/2 bg-custom-gradient text-white p-8">
          <h2 className="text-white font-bold text-3xl">Hi there!</h2>
          <p className="text-white text-xl text-center mb-6">
            Please enter your details and start your journey with us.
          </p>
          <Link to="/signup">
            <button className="bg-transparent text-white border border-white px-10 py-2 rounded-full  transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
