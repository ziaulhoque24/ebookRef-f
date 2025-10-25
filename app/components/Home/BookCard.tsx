"use client";

import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BookCardProps } from "@/types/book";
import { Download, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BookCard({
  id,
  title,
  author,
  image,
  price,
  fileUrl,
}: BookCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const priceNumber = parseFloat(price.replace("$", ""));
    dispatch(
      addToCart({
        id,
        title,
        author,
        image,
        price: priceNumber,
      })
    );
  };

  return (
    <div className='flex flex-col items-center text-center'>
      <Link href={`/books/${id}`} className='mb-3 sm:mb-4 w-full block'>
        <img
          src={image}
          alt={title}
          className='w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300'
        />
      </Link>

      <Link href={`/books/${id}`}>
        <h3 className='text-[#4A90E2] font-semibold mb-1.5 sm:mb-2 line-clamp-2 text-sm sm:text-base hover:underline cursor-pointer min-h-[2.5rem] sm:min-h-[3rem]'>
          {title}
        </h3>
      </Link>

      <p className='text-[#4A90E2] text-xs sm:text-sm mb-2 sm:mb-3'>{author}</p>

      <p className='text-gray-800 font-bold text-lg sm:text-xl mb-3 sm:mb-4'>
        {price}
      </p>

      {fileUrl ? (
        <a
          href={fileUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded transition-colors duration-300 w-full max-w-[200px] flex items-center justify-center gap-2 text-sm sm:text-base'
        >
          <Download className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
          <span className='hidden sm:inline'>Download</span>
          <span className='sm:hidden'>Get</span>
        </a>
      ) : (
        <button
          className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded transition-colors duration-300 w-full max-w-[200px] flex items-center justify-center gap-2 text-sm sm:text-base'
          onClick={handleAddToCart}
        >
          <ShoppingCart className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
          <span className='hidden sm:inline'>Add to Cart</span>
          <span className='sm:hidden'>Add</span>
        </button>
      )}
    </div>
  );
}
