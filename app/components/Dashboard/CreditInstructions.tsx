import {
  Coins,
  Gift,
  Lightbulb,
  Share2,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

export default function CreditInstructions() {
  return (
    <div className='space-y-6'>
      <div className='bg-gradient-to-br from-[var(--primary)] to-orange-600 rounded-xl shadow-md p-6 text-white'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='bg-white/20 p-3 rounded-lg'>
            <Coins className='w-6 h-6' />
          </div>
          <h2 className='text-2xl font-bold'>How to Earn Credits</h2>
        </div>

        <div className='space-y-4'>
          <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm'>
            <div className='flex items-start gap-3'>
              <div className='bg-white/20 p-2 rounded-full mt-1'>
                <Share2 className='w-5 h-5' />
              </div>
              <div>
                <h3 className='font-semibold text-lg mb-2'>
                  1. Share Your Referral Link
                </h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  Copy your unique referral link from the dashboard and share it
                  with friends, family, or on social media.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm'>
            <div className='flex items-start gap-3'>
              <div className='bg-white/20 p-2 rounded-full mt-1'>
                <Users className='w-5 h-5' />
              </div>
              <div>
                <h3 className='font-semibold text-lg mb-2'>
                  2. User Signs Up with Your Code
                </h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  When someone uses your referral code to create an account,
                  they're now your referral.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm'>
            <div className='flex items-start gap-3'>
              <div className='bg-white/20 p-2 rounded-full mt-1'>
                <ShoppingCart className='w-5 h-5' />
              </div>
              <div>
                <h3 className='font-semibold text-lg mb-2'>
                  3. They Make Their First Purchase
                </h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  When your referral makes their first purchase, both of you
                  earn{" "}
                  <span className='font-bold text-yellow-300'>
                    2 credits each
                  </span>
                  !
                </p>
              </div>
            </div>
          </div>

          <div className='bg-yellow-400 text-gray-900 rounded-lg p-4 mt-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Gift className='w-5 h-5' />
              <h3 className='font-bold text-lg'>Unlimited Earning!</h3>
            </div>
            <p className='text-sm font-medium'>
              Refer as many users as you want. Each first purchase earns you 2
              credits. No limits, no expiration!
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-md border border-gray-100 p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='bg-green-100 p-3 rounded-lg'>
            <Zap className='w-6 h-6 text-green-600' />
          </div>
          <h2 className='text-2xl font-bold text-gray-900'>
            How to Use Credits
          </h2>
        </div>

        <div className='space-y-4'>
          <div className='flex items-start gap-3 pb-3 border-b border-gray-100'>
            <div className='bg-green-50 p-2 rounded-full mt-1'>
              <Coins className='w-5 h-5 text-green-600' />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-900 mb-1'>Credit Value</h3>
              <p className='text-gray-600 text-sm'>
                <span className='font-bold text-green-600'>1 Credit = $1</span>{" "}
                discount on book purchases
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 pb-3 border-b border-gray-100'>
            <div className='bg-blue-50 p-2 rounded-full mt-1'>
              <ShoppingCart className='w-5 h-5 text-blue-600' />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-900 mb-1'>
                Apply at Checkout
              </h3>
              <p className='text-gray-600 text-sm'>
                When purchasing books, toggle "Use Credits" and enter how many
                you want to use for instant discount.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 pb-3 border-b border-gray-100'>
            <div className='bg-purple-50 p-2 rounded-full mt-1'>
              <Coins className='w-5 h-5 text-purple-600' />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-900 mb-1'>
                No Expiration
              </h3>
              <p className='text-gray-600 text-sm'>
                Your credits never expire. Save them up or use them anytime!
              </p>
            </div>
          </div>

          <div className='bg-red-50 rounded-lg p-3 border border-red-200'>
            <p className='text-sm text-red-800 font-medium'>
              ⚠️ Credits can only be used for purchases. Cash withdrawal is not
              available.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='bg-white/20 p-3 rounded-lg'>
            <Lightbulb className='w-6 h-6' />
          </div>
          <h2 className='text-2xl font-bold'>Tips to Get More Referrals</h2>
        </div>

        <div className='space-y-3'>
          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              1
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Share on Social Media:</span> Post
              your referral link on Facebook, Twitter, Instagram, and LinkedIn
              with a personal recommendation.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              2
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Email Your Network:</span> Send
              personalized emails to friends who love reading, highlighting the
              benefits of joining.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              3
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Join Book Communities:</span>{" "}
              Participate in online book clubs, forums, and reading groups.
              Share your link when appropriate.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              4
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Create Content:</span> Write blog
              posts or create videos reviewing books and include your referral
              link in the description.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              5
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Word of Mouth:</span> Tell
              colleagues, classmates, and book lovers in your circle about the
              platform and referral benefits.
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <span className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0'>
              6
            </span>
            <p className='text-white/90 text-sm'>
              <span className='font-semibold'>Add to Your Signature:</span>{" "}
              Include your referral link in your email signature or social media
              bio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
