import { BookX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='bg-gray-50 min-h-[70vh] flex items-center justify-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center max-w-md mx-auto'>
          <div className='bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6'>
            <BookX className='w-12 h-12 text-gray-400' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            Book Not Found
          </h1>
          <p className='text-gray-600 mb-8 text-sm sm:text-base'>
            Sorry, we couldn't find the book you're looking for. It may have
            been removed or doesn't exist.
          </p>
          <Link
            href='/'
            className='inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors'
          >
            Browse All Books
          </Link>
        </div>
      </div>
    </div>
  );
}
