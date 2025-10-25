import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-[#2b2b2b] text-white'>
      <div className='bg-[#333333] py-4'>
        <div className='container mx-auto px-4'>
          <nav className='flex flex-wrap justify-center gap-6 text-sm'>
            <Link href='/' className='hover:text-primary transition-colors'>
              Home
            </Link>
            <span className='text-gray-500'>|</span>
            <Link
              href='/terms'
              className='hover:text-primary transition-colors'
            >
              Terms And Conditions
            </Link>
            <span className='text-gray-500'>|</span>
            <Link
              href='/privacy'
              className='hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <span className='text-gray-500'>|</span>
            <Link
              href='/contact'
              className='hover:text-primary transition-colors'
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-lg font-bold mb-4'>REFEREBOOK</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              RefereBook was established in 2019 with the vision to provide an
              extensive library of books in digital format with a referral
              rewards system.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>PAGES</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>CONTACT US</h3>
            <ul className='space-y-3 text-sm text-gray-300'>
              <li>
                <span className='font-semibold text-white'>Email:</span>
                <br />
                <a
                  href='mailto:info@referebook.com'
                  className='hover:text-primary transition-colors'
                >
                  info@referebook.com
                </a>
              </li>
              <li>
                <span className='font-semibold text-white'>Support:</span>
                <br />
                <a
                  href='mailto:support@referebook.com'
                  className='hover:text-primary transition-colors'
                >
                  support@referebook.com
                </a>
              </li>
              <li>
                <span className='font-semibold text-white'>Follow Us:</span>
                <div className='flex gap-3 mt-2'>
                  <Link
                    href='https://twitter.com'
                    className='bg-white hover:bg-primary text-[#2b2b2b] hover:text-white p-2 rounded-full transition-colors'
                    target='_blank'
                    aria-label='Twitter'
                  >
                    <Twitter className='w-5 h-5' />
                  </Link>
                  <Link
                    href='https://facebook.com'
                    className='bg-white hover:bg-primary text-[#2b2b2b] hover:text-white p-2 rounded-full transition-colors'
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <Facebook className='w-5 h-5' />
                  </Link>
                  <Link
                    href='https://instagram.com'
                    className='bg-white hover:bg-primary text-[#2b2b2b] hover:text-white p-2 rounded-full transition-colors'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <Instagram className='w-5 h-5' />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className='border-t border-gray-700 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © 2025 <span className='font-semibold'>RefereBook</span> Made with
              ❤️ by <span className='font-semibold'>Ziaul Hoque</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
