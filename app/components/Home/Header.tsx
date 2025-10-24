import { auth } from "@/auth";
import { BookOpen, LayoutDashboard, ShoppingCart } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../LogoutButton";

export default async function Header() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <BookOpen className='w-8 h-8 text-[var(--primary)]' />
            <span className='text-2xl font-bold text-[var(--primary)]'>
              Refere<span className='text-[var(--secondary)]'>Book</span>
            </span>
          </Link>

          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='/'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors'
            >
              HOME
            </Link>
            <Link
              href='/about'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors'
            >
              ABOUT US
            </Link>
            <Link
              href='/categories'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors'
            >
              GENRES
            </Link>
            <Link
              href='/books'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors'
            >
              BOOKS
            </Link>
          </nav>

          <div className='flex items-center gap-3'>
            {isLoggedIn ? (
              <>
                <Link
                  href='/dashboard'
                  className='hidden sm:flex bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2 rounded-lg transition-colors items-center gap-2 text-sm font-medium'
                >
                  <LayoutDashboard className='w-4 h-4' />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href='/cart'
                  className='relative p-2 rounded-lg hover:bg-gray-100 transition-colors'
                  title='Shopping Cart'
                >
                  <ShoppingCart className='w-6 h-6 text-[var(--secondary)]' />
                  <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                    0
                  </span>
                </Link>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  href='/login'
                  className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium'
                >
                  Sign In
                </Link>
                <Link
                  href='/register'
                  className='bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium'
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
