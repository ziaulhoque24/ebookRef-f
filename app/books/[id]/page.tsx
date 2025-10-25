import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
export const dynamic = "force-dynamic";
async function getBook(id: string): Promise<BookDetail | null> {
  try {
    const session = await auth();
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (session?.accessToken) {
      headers.authorization = `Bearer ${session.accessToken}`;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`,
      {
        cache: "no-store",
        headers,
      }
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch book:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const book = await getBook(params.id);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} - RefereBook`,
    description: book.description,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBook(params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-4 sm:px-6 py-6 sm:py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10'>
              <div className='flex justify-center items-start'>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className='w-full max-w-sm h-auto object-cover rounded-lg shadow-md'
                />
              </div>

              <div className='flex flex-col'>
                <div className='mb-4 sm:mb-6'>
                  <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4'>
                    {book.title}
                  </h1>
                  <p className='text-lg sm:text-xl text-[#4A90E2] font-semibold mb-4'>
                    by {book.author}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
                    {book.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className='inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  <div className='mb-6 sm:mb-8'>
                    <p className='text-4xl sm:text-5xl font-bold text-[var(--primary)]'>
                      ${book.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className='mb-6 sm:mb-8'>
                  <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                    Description
                  </h2>
                  <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
                    {book.description}
                  </p>
                </div>

                <div className='mt-auto'>
                  <AddToCartButton
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.coverImage}
                    price={book.price}
                    fileUrl={book.fileUrl}
                  />
                </div>

                <div className='mt-6 pt-6 border-t border-gray-200'>
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
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 sm:mt-8 text-center'>
            <a
              href='/'
              className='inline-block text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors text-sm sm:text-base'
            >
              ← Back to Books
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
