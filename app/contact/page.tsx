import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - RefereBook",
  description:
    "Get in touch with RefereBook. We're here to help you with any questions or concerns.",
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-lg text-gray-600'>
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Email Us
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                For general inquiries
              </p>
              <a
                href='mailto:info@referebook.com'
                className='text-[var(--primary)] hover:underline font-medium'
              >
                info@referebook.com
              </a>
            </div>

            <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Customer Support
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Need help with your account?
              </p>
              <a
                href='mailto:support@referebook.com'
                className='text-[var(--primary)] hover:underline font-medium'
              >
                support@referebook.com
              </a>
            </div>

            <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Phone Support
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Mon-Fri from 9am to 6pm
              </p>
              <a
                href='tel:+1234567890'
                className='text-[var(--primary)] hover:underline font-medium'
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-md p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Frequently Asked Questions
            </h2>

            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  How do I purchase a book?
                </h3>
                <p className='text-gray-600'>
                  Browse our collection, add books to your cart, and complete
                  the checkout process. You can use credits earned from
                  referrals to get discounts on your purchases.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  How does the referral system work?
                </h3>
                <p className='text-gray-600'>
                  Share your unique referral link with friends. When they sign
                  up and make a purchase, you earn credits that can be used as
                  discounts on future book purchases. 1 credit equals $1.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Can I download purchased books?
                </h3>
                <p className='text-gray-600'>
                  Yes! Once you purchase a book, you can download it anytime
                  from your dashboard under the "Purchased Books" tab. All books
                  are available in PDF format.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  How can I track my referrals?
                </h3>
                <p className='text-gray-600'>
                  Visit your dashboard to see detailed statistics about your
                  referrals, including total referrals, successful conversions,
                  credits earned, and more.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Is there a refund policy?
                </h3>
                <p className='text-gray-600'>
                  Since our products are digital downloads, all sales are final.
                  However, if you experience any technical issues with your
                  download, please contact our support team and we'll be happy
                  to assist you.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl shadow-md p-8 text-white text-center'>
            <MapPin className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-2xl font-bold mb-2'>Visit Us</h3>
            <p className='text-lg mb-2'>RefereBook Headquarters</p>
            <p className='opacity-90'>
              123 Book Street, Library District
              <br />
              San Francisco, CA 94102
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
