import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - RefereBook",
  description:
    "Read RefereBook's terms and conditions for using our platform and services.",
};

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:py-12'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Terms and Conditions
          </h1>
          <p className='text-sm sm:text-base text-gray-600 mb-6 sm:mb-8'>
            Last Updated: October 25, 2025
          </p>

          <div className='prose prose-sm sm:prose-base lg:prose-lg max-w-none'>
            <section className='mb-6 sm:mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                1. Acceptance of Terms
              </h2>
              <p className='text-gray-700 mb-4'>
                By accessing and using RefereBook ("the Platform"), you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                2. Use License
              </h2>
              <p className='text-gray-700 mb-4'>
                Permission is granted to temporarily download one copy of the
                materials (ebooks) on RefereBook for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on RefereBook
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                3. Account Registration
              </h2>
              <p className='text-gray-700 mb-4'>
                To access certain features of the Platform, you must register
                for an account. You agree to:
              </p>
              <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                <li>Provide accurate, current, and complete information</li>
                <li>
                  Maintain the security of your password and identification
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                4. Purchases and Payment
              </h2>
              <p className='text-gray-700 mb-4'>
                All purchases made through RefereBook are subject to the
                following terms:
              </p>
              <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                <li>
                  All prices are listed in USD and are subject to change without
                  notice
                </li>
                <li>
                  Payment must be received in full before access to purchased
                  ebooks is granted
                </li>
                <li>
                  We accept major credit cards and other payment methods as
                  indicated on the Platform
                </li>
                <li>
                  Since ebooks are digital products, all sales are final and
                  non-refundable
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                5. Referral Program
              </h2>
              <p className='text-gray-700 mb-4'>
                RefereBook operates a referral rewards program with the
                following terms:
              </p>
              <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                <li>
                  Credits are earned when referred users sign up and make
                  purchases
                </li>
                <li>1 credit equals $1 USD discount on future purchases</li>
                <li>Credits cannot be exchanged for cash</li>
                <li>Credits have no expiration date unless otherwise stated</li>
                <li>
                  RefereBook reserves the right to modify or discontinue the
                  referral program at any time
                </li>
                <li>
                  Fraudulent referral activities will result in account
                  termination and forfeiture of all credits
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                6. Intellectual Property Rights
              </h2>
              <p className='text-gray-700 mb-4'>
                All content available on RefereBook, including but not limited
                to text, graphics, logos, images, and software, is the property
                of RefereBook or its content suppliers and is protected by
                international copyright laws.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                7. User Content
              </h2>
              <p className='text-gray-700 mb-4'>
                Users may not upload, post, or transmit any content that:
              </p>
              <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                <li>Violates any applicable laws or regulations</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains viruses or malicious code</li>
                <li>Is defamatory, obscene, or offensive</li>
                <li>Violates the privacy of others</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                8. Limitation of Liability
              </h2>
              <p className='text-gray-700 mb-4'>
                RefereBook shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses resulting from your access to or use of or
                inability to access or use the Platform.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                9. Termination
              </h2>
              <p className='text-gray-700 mb-4'>
                We may terminate or suspend your account and bar access to the
                Platform immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                10. Changes to Terms
              </h2>
              <p className='text-gray-700 mb-4'>
                RefereBook reserves the right to modify or replace these Terms
                at any time. We will provide notice of any significant changes
                by posting the new Terms on this page and updating the "Last
                Updated" date.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                11. Governing Law
              </h2>
              <p className='text-gray-700 mb-4'>
                These Terms shall be governed and construed in accordance with
                the laws of the United States, without regard to its conflict of
                law provisions.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                12. Contact Information
              </h2>
              <p className='text-gray-700 mb-4'>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p className='text-gray-700'>
                Email:{" "}
                <a
                  href='mailto:info@referebook.com'
                  className='text-[var(--primary)] hover:underline'
                >
                  info@referebook.com
                </a>
                <br />
                Support:{" "}
                <a
                  href='mailto:support@referebook.com'
                  className='text-[var(--primary)] hover:underline'
                >
                  support@referebook.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
