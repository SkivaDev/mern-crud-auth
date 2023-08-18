import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
          placeholder="Username"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 text-black"
          placeholder="Password"
        />

        <button
          type="submit"
          className="w-full bg-zinc-500 text-white p-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
