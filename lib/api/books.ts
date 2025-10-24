import { BooksApiResponse } from "@/types/book";

export async function fetchBooks(
  page = 1,
  count = 10
): Promise<BooksApiResponse | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      return null;
    }

    const url = `${baseUrl}/api/books?page=${page}&count=${count}`;
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch books: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data: BooksApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
}
