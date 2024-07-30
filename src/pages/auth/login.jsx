import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { Link, useNavigate } from "react-router-dom";
import { saveState } from "../../config/storage";

export const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request.post("/login", data).then((res) => {
      saveState("user", { ...res.data.user, token: res.data.accessToken });
      navigate("/", {
        replace: true,
      });
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
        <Link
          className="text-sm text-blue-500 hover:underline block mb-4 text-right"
          to="/register"
        >
          Register
        </Link>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
          />
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
