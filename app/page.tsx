import { fetchBooks } from "@/lib/api/books";
import BooksSection from "./components/Home/BooksSection";
import Hero from "./components/Home/Hero";

export const metadata = {
  title: "Ebook Referral - Choose Your Books",
  description:
    "Discover curated ebooks across genres. Browse, compare prices, and add favorites to your cart.",
};
export const dynamic = "force-dynamic";
export default async function Home() {
  const booksData = await fetchBooks(1, 10);
  const books = booksData?.items ?? [];
  const total = booksData?.total ?? 0;

  return (
    <>
      <Hero />
      <BooksSection initialBooks={books} initialTotal={total} />
    </>
  );
}
