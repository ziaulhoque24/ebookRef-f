"use client";

import { BookOpen, LayoutDashboard } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CartIcon from "../CartIcon";
import LogoutButton from "../LogoutButton";

export default function Header() {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 py-3 sm:py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <BookOpen className='w-6 h-6 sm:w-8 sm:h-8 text-[var(--primary)]' />
            <span className='text-xl sm:text-2xl font-bold text-[var(--primary)]'>
              Refere<span className='text-[var(--secondary)]'>Book</span>
            </span>
          </Link>

          <div className='flex items-center gap-2 sm:gap-3'>
            {isLoggedIn ? (
              <>
                <Link
                  href='/dashboard'
                  className='hidden sm:flex bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 lg:px-5 py-2 rounded-lg transition-colors items-center gap-2 text-sm font-medium'
                >
                  <LayoutDashboard className='w-4 h-4' />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href='/dashboard'
                  className='sm:hidden bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white p-2 rounded-lg transition-colors'
                  aria-label='Dashboard'
                >
                  <LayoutDashboard className='w-5 h-5' />
                </Link>
                <CartIcon />
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  href='/login'
                  className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 sm:px-5 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium'
                >
                  Sign In
                </Link>
                <Link
                  href='/register'
                  className='hidden sm:inline-block bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium'
                >
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
