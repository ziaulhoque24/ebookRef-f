"use client";

import { Package, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState<"purchased" | "orders">(
    "purchased"
  );

  const tabs = [
    {
      id: "purchased" as const,
      label: "Purchased Books",
      icon: ShoppingBag,
    },
    {
      id: "orders" as const,
      label: "Order History",
      icon: Package,
    },
  ];

  return (
    <div className='bg-white rounded-xl shadow-md border border-gray-100'>
      <div className='border-b border-gray-200'>
        <div className='flex'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <tab.icon className='w-5 h-5' />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className='p-6'>
        {activeTab === "purchased" && (
          <div className='text-center py-12'>
            <ShoppingBag className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              No Purchased Books Yet
            </h3>
            <p className='text-gray-600 mb-6'>
              Start exploring our collection and purchase your first book!
            </p>
            <a
              href='/books'
              className='inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors'
            >
              Browse Books
            </a>
          </div>
        )}

        {activeTab === "orders" && (
          <div className='text-center py-12'>
            <Package className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              No Orders Yet
            </h3>
            <p className='text-gray-600'>
              Your order history will appear here once you make your first
              purchase.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
