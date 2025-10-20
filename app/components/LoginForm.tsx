"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { login } from "../actions";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await login(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <>
      <div className='text-xl text-red-500'>{error}</div>
      <form className='login-form' onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' id='email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>

        <button type='submit' className='btn-primary w-full mt-4'>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
