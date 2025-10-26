"use client";

export default function Loading() {
  return (
    <div className='fixed inset-0 bg-linear-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center z-50'>
      <div className='text-center'>
        {/* Animated Book Icon */}
        <div className='relative mb-8'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-24 h-24 rounded-full bg-primary opacity-20 animate-ping'></div>
          </div>
          <div className='relative flex items-center justify-center'>
            <div className='w-20 h-20 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl animate-bounce'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-white animate-pulse'
              >
                <path d='M12 7v14' />
                <path d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z' />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className='space-y-3'>
          <h2 className='text-2xl font-bold text-gray-800'>
            Loading<span className='animate-pulse'>...</span>
          </h2>
          <p className='text-gray-600 text-sm'>
            Preparing your reading experience
          </p>
        </div>

        {/* Animated Dots */}
        <div className='flex items-center justify-center gap-2 mt-6'>
          <div className='w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]'></div>
          <div className='w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]'></div>
          <div className='w-3 h-3 rounded-full bg-primary animate-bounce'></div>
        </div>

        {/* Progress Bar */}
        <div className='mt-8 w-64 mx-auto'>
          <div className='h-1 bg-gray-200 rounded-full overflow-hidden'>
            <div className='h-full bg-linear-to-r from-primary to-primary-dark rounded-full animate-[shimmer_2s_ease-in-out_infinite]'></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
}
