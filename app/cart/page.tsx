"use client";

import { clearCart, removeFromCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ShoppingBag, Trash2, X } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className='bg-gray-50 min-h-[60vh] flex items-center justify-center'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center max-w-md mx-auto'>
            <div className='bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6'>
              <ShoppingBag className='w-12 h-12 text-gray-400' />
            </div>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              Your Cart is Empty
            </h1>
            <p className='text-gray-600 mb-8'>
              Looks like you haven't added any books to your cart yet.
            </p>
            <Link
              href='/'
              className='inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
            Shopping Cart
          </h1>
          <button
            onClick={handleClearCart}
            className='text-red-600 hover:text-red-700 font-medium flex items-center gap-2 transition-colors'
          >
            <Trash2 className='w-5 h-5' />
            Clear Cart
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='bg-white rounded-xl shadow-md p-6 border border-gray-100'
                >
                  <div className='flex gap-6'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-24 h-32 object-cover rounded'
                    />
                    <div className='flex-1'>
                      <div className='flex items-start justify-between'>
                        <div>
                          <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                            {item.title}
                          </h3>
                          <p className='text-gray-600 text-sm mb-4'>
                            {item.author}
                          </p>
                          <p className='text-xl font-bold text-gray-800'>
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className='text-gray-400 hover:text-red-600 transition-colors'
                          title='Remove item'
                        >
                          <X className='w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-md p-6 border border-gray-100 sticky top-24'>
              <h2 className='text-xl font-bold text-gray-800 mb-6'>
                Order Summary
              </h2>

              <div className='space-y-3 mb-6'>
                <div className='flex justify-between text-gray-600'>
                  <span>
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "ebook" : "ebooks"}
                  </span>
                  <span className='font-semibold'>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className='border-t border-gray-200 pt-3'>
                  <div className='flex justify-between text-lg font-bold text-gray-800'>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className='w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-3 rounded-lg font-semibold transition-colors mb-3'>
                Proceed to Checkout
              </button>

              <Link
                href='/'
                className='block text-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium transition-colors'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
