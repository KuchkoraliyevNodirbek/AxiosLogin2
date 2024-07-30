import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.data) {
          navigate("/login");
        }
      })
      .catch((error) => {
        setError("email", {
          message: "Registration failed. Please try again.",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Register</h1>
        <Link
          className="text-sm text-blue-500 hover:underline block mb-4 text-right"
          to="/login"
        >
          LOGIN
        </Link>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
