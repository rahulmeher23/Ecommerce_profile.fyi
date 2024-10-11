import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/AppIcons";
import axios from "axios";
import toast from "react-hot-toast";

const Signup2 = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();  // To navigate to the login page
  
  useEffect(() => {
    document.title = `LAMA | Sign Up`;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
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
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post('https://open-fashion-express.vercel.app/api/v1/signup',  formData);
        if (response.status === 201) {
          toast.success('Account Registered Successfully!');
          setIsRegistered(true);  // Set isRegistered to true after successful registration
          setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
          })
        }
      } catch (error) {
        toast.error('Failed to register the account. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="login-body">
        {/* Logo */}
        <div className="fixed top-0 left-10 w-28 h-28">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {
          isRegistered ? (
            <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2]">
              <div className="flex flex-col items-center w-[900px] bg-white shadow-lg rounded-lg p-10">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Account Registered Successfully!</h2>
                <p className="text-xl text-center mb-6">Thank you for signing up! Your account has been successfully created.</p>
                <button
                  onClick={() => navigate("/login")}  // Redirect to login page
                  className="bg-black text-white px-10 py-3 rounded-full font-semibold"
                >
                  Login Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2]">
              <div className="flex w-[900px]  bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Right Overlay */}
                <div className="flex flex-col justify-center items-center w-1/2 bg-custom-gradient p-8">
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

                {/* Signup Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-1/2 p-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Create Your Account
                  </h2>

                  {/* Name Input */}
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

                  {/* Email Input */}
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

                  {/* Contact Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="contact" className="text-gray-600 font-medium">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-2 border ${
                        errors.contact ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Password Input */}
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
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Signup2;
