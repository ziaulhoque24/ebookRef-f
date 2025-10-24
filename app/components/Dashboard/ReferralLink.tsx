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
      <div className='flex items-center gap-2 mb-3'>
        <Share2 className='w-5 h-5 text-[var(--primary)]' />
        <div>
          <h3 className='text-lg font-bold text-gray-800'>
            Your Referral Link
          </h3>
          <p className='text-gray-600 text-sm'>Share and earn rewards!</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex-1 relative'>
          <input
            type='text'
            value={referralLink}
            readOnly
            className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-800 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]'
          />
        </div>
        <button
          onClick={handleCopy}
          className='bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap'
        >
          {copied ? (
            <>
              <Check className='w-5 h-5' />
              Copied!
            </>
          ) : (
            <>
              <Copy className='w-5 h-5' />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
