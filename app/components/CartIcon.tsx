"use client";

import { useAppSelector } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartIcon() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.length;

  return (
    <Link
      href='/cart'
      className='relative p-2 rounded-lg hover:bg-gray-100 transition-colors'
      title='Shopping Cart'
    >
      <ShoppingCart className='w-6 h-6 text-[var(--secondary)]' />
      {totalItems > 0 && (
        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
          {totalItems}
        </span>
      )}
    </Link>
  );
}
