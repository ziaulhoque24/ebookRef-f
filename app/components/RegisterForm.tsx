"use client";

import { AlertCircle, BookOpen, Gift, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { register } from "../actions";

const RegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlReferralCode = searchParams.get("referralCode");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await register(formData);

      if (response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/login?registered=true");
      }
    } catch (e) {
      console.error(e);
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-(--primary)/5 via-white to-(--secondary)/5 px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <div className='text-center mb-8'>
            <Link href='/' className='inline-flex items-center gap-2 mb-6'>
              <BookOpen className='w-10 h-10 text-primary' />
              <span className='text-3xl font-bold text-primary'>
                Refere<span className='text-secondary'>Book</span>
              </span>
            </Link>
            <h1 className='text-2xl font-bold text-gray-800 mb-2'>
              Create Account
            </h1>
            <p className='text-gray-600'>Join our community of book lovers</p>
          </div>

          {error && (
            <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3'>
              <AlertCircle className='w-5 h-5 text-red-500 shrink-0 mt-0.5' />
              <p className='text-red-700 text-sm'>{error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className='space-y-5'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  First Name
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    required
                    className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white'
                    placeholder='John'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Last Name
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    required
                    className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white'
                    placeholder='Doe'
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white'
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
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  minLength={8}
                  className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white'
                  placeholder='••••••••'
                />
              </div>
              <p className='text-xs text-gray-500 mt-1'>
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label
                htmlFor='referralCode'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Referral Code{" "}
                {!urlReferralCode && (
                  <span className='text-gray-500 font-normal'>(Optional)</span>
                )}
              </label>
              <div className='relative'>
                <Gift className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  name='referralCode'
                  id='referralCode'
                  defaultValue={urlReferralCode || ""}
                  readOnly={!!urlReferralCode}
                  className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 placeholder:text-gray-400 bg-white read-only:bg-gray-100 read-only:cursor-not-allowed'
                  placeholder='Enter referral code'
                />
              </div>
              <p className='text-xs text-gray-500 mt-1'>
                {urlReferralCode
                  ? "Referral code applied from invite link"
                  : "Have a referral code? Get bonus rewards!"}
              </p>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-gray-600'>
              Already have an account?{" "}
              <Link
                href='/login'
                className='text-secondary hover:text-secondary-light font-semibold transition-colors'
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className='mt-6 pt-6 border-t border-gray-200'>
            <p className='text-xs text-center text-gray-500'>
              By creating an account, you agree to our{" "}
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

        <div className='mt-8 text-center'>
          <Link
            href='/'
            className='text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
