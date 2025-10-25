"use client";

import { useGetBooksQuery } from "@/redux/feature/book/bookApi";
import { Book } from "@/types/book";
import { useState } from "react";
import BookCard from "./BookCard";

interface BooksSectionProps {
  initialBooks: Book[];
  initialTotal: number;
}

export default function BooksSection({
  initialBooks,
  initialTotal,
}: BooksSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, isFetching } = useGetBooksQuery(
    {
      page: currentPage,
      count: pageSize,
    },
    {
      skip: currentPage === 1,
    }
  );

  const books = data?.items ? [...initialBooks, ...data.items] : initialBooks;
  const total = data?.total ?? initialTotal;

  const hasMoreBooks = books.length < total;

  const handleSeeMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <section className='py-12 sm:py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-secondary mb-2'>
            CHOOSE YOUR BOOKS
          </h2>
          <p className='text-gray-600 text-sm sm:text-base'>
            Explore our collection of {total} books across all genres.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8'>
          {books.length === 0 && !isLoading ? (
            <p className='col-span-full text-center text-gray-500'>
              No books found.
            </p>
          ) : (
            books.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author ?? "Unknown"}
                image={book.coverImage ?? "/books/default.jpg"}
                price={book.price ? `$${book.price.toFixed(2)}` : "Free"}
                fileUrl={book.fileUrl}
              />
            ))
          )}
        </div>

        {isFetching && currentPage > 1 && (
          <div className='text-center mt-8'>
            <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-secondary'></div>
            <p className='text-gray-600 mt-2 text-sm sm:text-base'>
              Loading more books...
            </p>
          </div>
        )}

        {hasMoreBooks && !isFetching && (
          <div className='text-center mt-8 sm:mt-12'>
            <button
              onClick={handleSeeMore}
              disabled={isFetching}
              className='bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base'
            >
              See More Books
            </button>
            <p className='text-gray-500 text-xs sm:text-sm mt-2'>
              Showing {books.length} of {total} books
            </p>
          </div>
        )}

        {!hasMoreBooks && books.length > 0 && (
          <div className='text-center mt-8 sm:mt-12'>
            <p className='text-gray-600 text-xs sm:text-sm'>
              You've viewed all {total} books
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
