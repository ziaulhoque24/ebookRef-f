"use client";

import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";

interface Genre {
  id: string;
  name: string;
}

interface BookDetail {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  genres: Genre[];
  fileUrl?: string;
}

interface BookDetailClientProps {
  book: BookDetail;
}

export default function BookDetailClient({ book }: BookDetailClientProps) {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-4 sm:px-6 py-6 sm:py-12'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-xl shadow-lg overflow-hidden'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex justify-center items-start'
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className='w-full max-w-sm h-auto object-cover rounded-lg shadow-md'
                />
              </motion.div>

              <div className='flex flex-col'>
                <div className='mb-4 sm:mb-6'>
                  <motion.h1
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4'
                  >
                    {book.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-lg sm:text-xl text-[#4A90E2] font-semibold mb-4'
                  >
                    by {book.author}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='flex flex-wrap gap-2 mb-4 sm:mb-6'
                  >
                    {book.genres.map((genre, index) => (
                      <motion.span
                        key={genre.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className='inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'
                      >
                        {genre.name}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='mb-6 sm:mb-8'
                  >
                    <p className='text-4xl sm:text-5xl font-bold text-primary'>
                      ${book.price.toFixed(2)}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className='mb-6 sm:mb-8'
                >
                  <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                    Description
                  </h2>
                  <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
                    {book.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className='mt-auto'
                >
                  <AddToCartButton
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.coverImage}
                    price={book.price}
                    fileUrl={book.fileUrl}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className='mt-6 pt-6 border-t border-gray-200'
                >
                  <div className='grid grid-cols-2 gap-4 text-sm text-gray-600'>
                    <div>
                      <p className='font-semibold text-gray-700 mb-1'>
                        Published
                      </p>
                      <p>
                        {new Date(book.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-700 mb-1'>
                        Last Updated
                      </p>
                      <p>
                        {new Date(book.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className='mt-6 sm:mt-8 text-center'
          >
            <a
              href='/'
              className='inline-block text-primary hover:text-primary-dark font-semibold transition-colors text-sm sm:text-base'
            >
              ← Back to Books
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
