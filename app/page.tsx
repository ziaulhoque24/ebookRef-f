import { fetchBooks } from "@/lib/api/books";
import BooksSection from "./components/Home/BooksSection";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";

export const metadata = {
  title: "Ebook Referral - Choose Your Books",
  description:
    "Discover curated ebooks across genres. Browse, compare prices, and add favorites to your cart.",
};

export default async function Home() {
  const booksData = await fetchBooks(1, 10);
  const books = booksData?.items ?? [];
  const total = booksData?.total ?? 0;

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <BooksSection initialBooks={books} initialTotal={total} />
      </main>
      <Footer />
    </div>
  );
}
