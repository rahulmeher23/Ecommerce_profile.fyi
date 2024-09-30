import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup2 = () => {
  useEffect(() => {
    document.title = `LAMA | Sign Up`;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form data
  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.contact) {
      newErrors.contact = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data Submitted:", formData);
      // Here you can perform any action you want, such as making an API call
    }
  };

  return (
    <>
      <div className="login-body">
        {/* <Navbar /> */}
        <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2]">
          <div className="flex w-[900px]  bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Right Overlay */}

            <div className="flex flex-col justify-center items-center w-1/2 bg-custom-gradient p-8 ">
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-white font-bold text-3xl">Welcome!</h2>
                <p className="text-white text-xl text-center mb-6">
                  Please login with your credentials to keep connected with us.
                </p>
              </div>
              <Link to="/login">
                <button className="bg-transparent text-white border border-white px-10 py-2 rounded-full  transition-colors">
                  Sign In
                </button>
              </Link>
            </div>

            {/* Signup */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-1/2 p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Create Your Account
              </h2>

              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-gray-600 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="contact" className="text-gray-600 font-medium">
                  Phone
                </label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-2 border ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">{errors.contact}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-gray-600 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white rounded-md font-semibold transition duration-200 mt-5"
              >
                Sign Up
              </button>
            </form>
            {/* SignIn End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup2;
