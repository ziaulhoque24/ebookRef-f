"use client";

import heroImage from "@/app/assets/hero_banner.webp";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  return (
    <section className='relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={heroImage}
          alt='Books Library'
          fill
          className='object-cover'
          priority
          quality={90}
        />
      </div>

      <div className='absolute inset-0 z-10 bg-linear-to-r from-black/90 via-black/70 to-black/30'></div>

      <div className='absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-black/40'></div>

      <div className='relative z-20 container mx-auto px-4 sm:px-6 h-full flex items-center'>
        <div className='max-w-3xl text-white'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-block mb-4 sm:mb-6'
          >
            <span className='bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide'>
              Ebook Referral Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'
          >
            Read, Share &
            <span className='block text-primary mt-2'>Earn Rewards</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-2xl'
          >
            Join our community of book lovers. Download premium ebooks and earn
            rewards by referring friends to discover amazing reads.
          </motion.p>

          {!isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4'
            >
              <Link
                href='/register'
                className='inline-block text-center bg-primary hover:bg-primary-dark text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Sign Up Now
              </Link>

              <span className='text-xs sm:text-sm text-gray-300 text-center sm:text-left'>
                🎁 Get bonus rewards on signup
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xl'
          >
            <div className='text-center md:text-left'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                1000+
              </div>
              <div className='text-xs sm:text-sm text-gray-300 mt-1'>
                Premium Ebooks
              </div>
            </div>
            <div className='text-center md:text-left'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                Unlimited
              </div>
              <div className='text-xs sm:text-sm text-gray-300 mt-1'>
                Referrals
              </div>
            </div>
            <div className='text-center md:text-left'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                Instant
              </div>
              <div className='text-xs sm:text-sm text-gray-300 mt-1'>
                Rewards
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-gray-50 via-gray-50/50 to-transparent z-10'></div>
    </section>
  );
}
