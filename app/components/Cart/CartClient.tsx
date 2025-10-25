"use client";

import { clearCart, removeFromCart } from "@/redux/feature/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/feature/order/orderApi";
import { useGetDashboardQuery } from "@/redux/feature/user/userApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Coins, ShoppingBag, Trash2, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartClient() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: dashboardData } = useGetDashboardQuery();
  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();

  const [useCredits, setUseCredits] = useState(false);
  const [creditsToUse, setCreditsToUse] = useState(0);

  const userCredits = dashboardData?.credits ?? 0;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const maxCreditsCanUse = Math.min(userCredits, totalPrice);

  const finalPrice = useCredits ? totalPrice - creditsToUse : totalPrice;

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleUseCreditsToggle = () => {
    setUseCredits(!useCredits);
    if (!useCredits) {
      setCreditsToUse(maxCreditsCanUse);
    } else {
      setCreditsToUse(0);
    }
  };

  const handleCreditsChange = (value: number) => {
    const clampedValue = Math.min(Math.max(0, value), maxCreditsCanUse);
    setCreditsToUse(clampedValue);
  };

  const handlePlaceOrder = async () => {
    try {
      const ebookIds = cartItems.map((item) => item.id);
      const result = await createOrder({
        ebookIds,
        creditsToUse: useCredits ? creditsToUse : 0,
      }).unwrap();

      dispatch(clearCart());
      router.push(`/order-success?orderId=${result.order?.id}`);
    } catch (error: any) {
      alert(error?.data?.message || "Failed to place order. Please try again.");
    }
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
              className='inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors'
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
      <div className='container mx-auto px-4 sm:px-6 py-6 sm:py-8'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
            Shopping Cart
          </h1>
          <button
            onClick={handleClearCart}
            className='text-red-600 hover:text-red-700 font-medium flex items-center gap-2 transition-colors text-sm sm:text-base'
          >
            <Trash2 className='w-4 h-4 sm:w-5 sm:h-5' />
            Clear Cart
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
          <div className='lg:col-span-2'>
            <div className='space-y-3 sm:space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100'
                >
                  <div className='flex gap-3 sm:gap-6'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-20 h-28 sm:w-24 sm:h-32 object-cover rounded shrink-0'
                    />
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-start justify-between gap-2'>
                        <div className='flex-1 min-w-0'>
                          <h3 className='text-base sm:text-lg font-semibold text-gray-800 mb-1 line-clamp-2'>
                            {item.title}
                          </h3>
                          <p className='text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4'>
                            {item.author}
                          </p>
                          <p className='text-lg sm:text-xl font-bold text-gray-800'>
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className='text-gray-400 hover:text-red-600 transition-colors shrink-0'
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
            <div className='bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 lg:sticky lg:top-24'>
              <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6'>
                Order Summary
              </h2>

              <div className='space-y-3 mb-4 sm:mb-6'>
                <div className='flex justify-between text-gray-600 text-sm sm:text-base'>
                  <span>
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "ebook" : "ebooks"}
                  </span>
                  <span className='font-semibold'>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {userCredits > 0 && (
                  <div className='border-t border-gray-200 pt-3'>
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-2'>
                        <Coins className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-500' />
                        <span className='text-gray-700 font-medium text-sm sm:text-base'>
                          Use Credits
                        </span>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          checked={useCredits}
                          onChange={handleUseCreditsToggle}
                          className='sr-only peer'
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    {useCredits && (
                      <div className='bg-gray-50 rounded-lg p-3 sm:p-4 space-y-3'>
                        <div className='flex justify-between text-xs sm:text-sm'>
                          <span className='text-gray-600'>
                            Available Credits
                          </span>
                          <span className='font-semibold text-gray-800'>
                            {userCredits}
                          </span>
                        </div>
                        <div>
                          <label className='text-xs sm:text-sm text-gray-600 mb-2 block'>
                            Credits to use (1 credit = $1)
                          </label>
                          <input
                            type='number'
                            min='0'
                            max={maxCreditsCanUse}
                            value={creditsToUse}
                            onChange={(e) =>
                              handleCreditsChange(Number(e.target.value))
                            }
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base'
                          />
                        </div>
                        <div className='flex justify-between text-xs sm:text-sm text-green-600 font-semibold'>
                          <span>Credit Discount</span>
                          <span>-${creditsToUse.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className='border-t border-gray-200 pt-3'>
                  <div className='flex justify-between text-base sm:text-lg font-bold text-gray-800'>
                    <span>Total</span>
                    <span>${finalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isCreatingOrder}
                className='w-full bg-primary hover:bg-primary-dark text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-colors mb-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base'
              >
                {isCreatingOrder ? "Processing..." : "Place Order"}
              </button>

              <Link
                href='/'
                className='block text-center text-primary hover:text-primary-dark font-medium transition-colors text-sm sm:text-base'
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
