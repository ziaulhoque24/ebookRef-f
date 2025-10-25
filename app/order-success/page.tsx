"use client";

import { CheckCircle, Package } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className='bg-gray-50 min-h-[70vh] flex items-center justify-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-2xl mx-auto text-center'>
          <div className='bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6'>
            <CheckCircle className='w-12 h-12 text-green-600' />
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            Order Placed Successfully!
          </h1>

          <p className='text-gray-600 text-lg mb-8'>
            Thank you for your purchase. Your ebooks are now ready to read.
          </p>

          {orderId && (
            <div className='bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8'>
              <div className='flex items-center justify-center gap-3 mb-2'>
                <Package className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600 font-medium'>Order ID</span>
              </div>
              <p className='text-2xl font-bold text-gray-800'>{orderId}</p>
            </div>
          )}

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/dashboard'
              className='bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Go to Dashboard
            </Link>
            <Link
              href='/'
              className='bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors'
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
