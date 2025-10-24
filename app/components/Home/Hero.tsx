import heroImage from "@/app/assets/hero_banner.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section className='relative h-[600px] md:h-[700px] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={heroImage}
          alt='Books Library'
          fill
          className='object-cover'
          priority
          quality={90}
        />
      </div>

      <div className='absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/30'></div>

      <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40'></div>

      <div className='relative z-20 container mx-auto px-4 h-full flex items-center'>
        <div className='max-w-3xl text-white'>
          <div className='inline-block mb-6'>
            <span className='bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
              Ebook Referral Platform
            </span>
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
            Read, Share &
            <span className='block text-[var(--primary)] mt-2'>
              Earn Rewards
            </span>
          </h1>

          <p className='text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl'>
            Join our community of book lovers. Download premium ebooks and earn
            rewards by referring friends to discover amazing reads.
          </p>

          <div className='flex items-center gap-4'>
            <button className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
              Sign Up Now
            </button>

            <span className='text-sm text-gray-300 hidden md:inline-block'>
              🎁 Get bonus rewards on signup
            </span>
          </div>

          <div className='mt-12 grid grid-cols-3 gap-8 max-w-xl'>
            <div className='text-center md:text-left'>
              <div className='text-3xl md:text-4xl font-bold text-[var(--primary)]'>
                1000+
              </div>
              <div className='text-sm text-gray-300 mt-1'>Premium Ebooks</div>
            </div>
            <div className='text-center md:text-left'>
              <div className='text-3xl md:text-4xl font-bold text-[var(--primary)]'>
                Unlimited
              </div>
              <div className='text-sm text-gray-300 mt-1'>Referrals</div>
            </div>
            <div className='text-center md:text-left'>
              <div className='text-3xl md:text-4xl font-bold text-[var(--primary)]'>
                Instant
              </div>
              <div className='text-sm text-gray-300 mt-1'>Rewards</div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent z-10'></div>
    </section>
  );
}
