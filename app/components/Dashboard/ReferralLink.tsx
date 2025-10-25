"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

interface ReferralLinkProps {
  referralLink: string;
}

export default function ReferralLink({ referralLink }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      <div className='flex items-center gap-2 mb-2 sm:mb-3'>
        <Share2 className='w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]' />
        <div>
          <h3 className='text-base sm:text-lg font-bold text-gray-800'>
            Your Referral Link
          </h3>
          <p className='text-gray-600 text-xs sm:text-sm'>Share and earn rewards!</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2'>
        <div className='flex-1 relative'>
          <input
            type='text'
            value={referralLink}
            readOnly
            className='w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-800 font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]'
          />
        </div>
        <button
          onClick={handleCopy}
          className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base'
        >
          {copied ? (
            <>
              <Check className='w-4 h-4 sm:w-5 sm:h-5' />
              Copied!
            </>
          ) : (
            <>
              <Copy className='w-4 h-4 sm:w-5 sm:h-5' />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
