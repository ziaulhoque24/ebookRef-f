import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BookDetailClient from "./BookDetailClient";

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

  return <BookDetailClient book={book} />;
}
