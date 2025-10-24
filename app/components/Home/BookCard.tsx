"use client";

import { BookCardProps } from "@/types/book";

export default function BookCard({
  id,
  title,
  author,
  image,
  price,
}: BookCardProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-4 w-full'>
        <img
          src={image}
          alt={title}
          className='w-full h-[320px] object-cover rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300'
        />
      </div>

      <h3 className='text-[#4A90E2] font-semibold mb-2 line-clamp-2 text-base hover:underline cursor-pointer min-h-[3rem]'>
        {title}
      </h3>

      <p className='text-[#4A90E2] text-sm mb-3'>{author}</p>

      <p className='text-gray-800 font-bold text-xl mb-4'>{price}</p>

      <button
        className='bg-[#F5C542] hover:bg-[#E6B532] text-gray-800 font-semibold px-6 py-2 rounded transition-colors duration-300 w-full max-w-[200px]'
        onClick={(e) => {
          e.preventDefault();
          console.log(`Added book ${id} to cart`);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
