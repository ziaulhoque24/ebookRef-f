"use client";

import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { motion } from "framer-motion";
import { Download, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AddToCartButtonProps {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  fileUrl?: string;
}

export default function AddToCartButton({
  id,
  title,
  author,
  image,
  price,
  fileUrl,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!session) {
      router.push("/login");
      return;
    }

    dispatch(
      addToCart({
        id,
        title,
        author,
        image,
        price,
      })
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (fileUrl) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={fileUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base sm:text-lg'
      >
        <Download className='w-5 h-5 sm:w-6 sm:h-6' />
        Download Book
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={added ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
      onClick={handleAddToCart}
      className='w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base sm:text-lg'
    >
      <ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
      {added ? "Added to Cart!" : "Add to Cart"}
    </motion.button>
  );
}
