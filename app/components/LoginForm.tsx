"use client";

import { AlertCircle, BookOpen, CheckCircle, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { login } from "../actions";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get("registered") === "true";

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-(--primary)/5 via-white to-(--secondary)/5 px-4 py-8 sm:py-12'>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-2xl shadow-xl p-6 sm:p-8'>
          <div className='text-center mb-6 sm:mb-8'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 mb-4 sm:mb-6'
            >
              <BookOpen className='w-8 h-8 sm:w-10 sm:h-10 text-primary' />
              <span className='text-2xl sm:text-3xl font-bold text-primary'>
                Refere<span className='text-secondary'>Book</span>
              </span>
            </Link>
            <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
              Welcome Back
            </h1>
            <p className='text-sm sm:text-base text-gray-600'>
              Sign in to your account to continue
            </p>
          </div>

          {isRegistered && (
            <div className='mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2 sm:gap-3'>
              <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5' />
              <p className='text-green-700 text-xs sm:text-sm'>
                Registration successful! Please sign in with your credentials.
              </p>
            </div>
          )}

          {error && (
            <div className='mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 sm:gap-3'>
              <AlertCircle className='w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5' />
              <p className='text-red-700 text-xs sm:text-sm'>{error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className='space-y-5 sm:space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400' />
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  className='w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white text-sm sm:text-base'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400' />
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  className='w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white text-sm sm:text-base'
                  placeholder='••••••••'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-primary hover:bg-primary-dark text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base'
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className='mt-6 sm:mt-8 text-center'>
            <p className='text-sm sm:text-base text-gray-600'>
              Don't have an account?{" "}
              <Link
                href='/register'
                className='text-secondary hover:text-secondary-light font-semibold transition-colors'
              >
                Join now
              </Link>
            </p>
          </div>

          <div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200'>
            <p className='text-xs text-center text-gray-500'>
              By signing in, you agree to our{" "}
              <Link href='/terms' className='text-primary hover:underline'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href='/privacy' className='text-primary hover:underline'>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className='mt-6 sm:mt-8 text-center'>
          <Link
            href='/'
            className='text-sm sm:text-base text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
