export interface Genre {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  description?: string;
  author?: string;
  price?: number;
  coverImage?: string;
  createdAt?: string;
  updatedAt?: string;
  genres?: Genre[];
}

export interface BooksApiResponse {
  items: Book[];
  total: number;
}

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  price: string;
}
