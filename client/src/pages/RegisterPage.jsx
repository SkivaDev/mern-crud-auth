import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 text-white p-2 rounded-md mb-4" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-4">REGISTER</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
            placeholder="Username"
          />
          {errors.username && (
            <span className="text-red-500">Username is required</span>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-md mb-4"
          >
            Register
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Already have an account?
          <Link to="/login" className="text-sky-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
