"use client";

import {
  Order,
  OrderItem,
  PurchasedBook,
  useGetOrdersQuery,
  useGetPurchasedBooksQuery,
} from "@/redux/feature/order/orderApi";
import { Download, Package, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Pagination from "../Paginaiton";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState<"purchased" | "orders">(
    "purchased"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data: purchasedBooks, isLoading: isLoadingPurchased } =
    useGetPurchasedBooksQuery(undefined, {
      skip: activeTab !== "purchased",
    });

  const { data: ordersData, isLoading: isLoadingOrders } = useGetOrdersQuery(
    {
      page: currentPage,
      count: pageSize,
    },
    {
      skip: activeTab !== "orders",
    }
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

  const handlePaginationChange = (page: number, count: number) => {
    setCurrentPage(page);
    setPageSize(count);
  };

  return (
    <div className='bg-white rounded-xl shadow-md border border-gray-100'>
      <div className='border-b border-gray-200'>
        <div className='flex'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                activeTab === tab.id
                  ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <tab.icon className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden sm:inline'>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className='p-4 sm:p-6'>
        {activeTab === "purchased" && (
          <>
            {isLoadingPurchased ? (
              <div className='text-center py-12'>
                <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]'></div>
                <p className='text-gray-600 mt-4'>Loading books...</p>
              </div>
            ) : purchasedBooks && purchasedBooks.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>
                {purchasedBooks.map((book: PurchasedBook) => (
                  <div
                    key={book.id}
                    className='border border-gray-200 rounded-lg overflow-hidden hover:border-[var(--primary)] transition-colors'
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className='w-full h-48 sm:h-56 md:h-64 object-cover'
                    />
                    <div className='p-3 sm:p-4'>
                      <h3 className='font-bold text-base sm:text-lg text-gray-800 mb-1 line-clamp-2'>
                        {book.title}
                      </h3>
                      <p className='text-xs sm:text-sm text-gray-600 mb-2'>
                        {book.author}
                      </p>
                      <p className='text-xs sm:text-sm text-gray-700 mb-3 line-clamp-2'>
                        {book.description}
                      </p>
                      <div className='flex flex-wrap gap-1 mb-3'>
                        {book.genres.map((genre) => (
                          <span
                            key={genre.id}
                            className='text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full'
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                      <p className='text-xs text-gray-500 mb-3'>
                        Purchased on{" "}
                        {new Date(book.purchasedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <a
                        href={book.fileUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-sm'
                      >
                        <Download className='w-4 h-4' />
                        Download Book
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
          </>
        )}

        {activeTab === "orders" && (
          <>
            {isLoadingOrders ? (
              <div className='text-center py-12'>
                <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]'></div>
                <p className='text-gray-600 mt-4'>Loading orders...</p>
              </div>
            ) : ordersData && ordersData.items.length > 0 ? (
              <>
                <div className='space-y-3 sm:space-y-4 mb-6'>
                  {ordersData.items.map((order: Order) => (
                    <div
                      key={order.id}
                      className='border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-[var(--primary)] transition-colors'
                    >
                      <div className='flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4 gap-2'>
                        <div className='flex-1'>
                          <p className='text-xs sm:text-sm text-gray-600'>
                            Order ID:{" "}
                            <span className='font-mono break-all'>
                              {order.id}
                            </span>
                          </p>
                          <p className='text-xs sm:text-sm text-gray-600 mt-1'>
                            Date:{" "}
                            {new Date(order.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                        <span className='inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full self-start'>
                          {order.status}
                        </span>
                      </div>

                      <div className='space-y-3 mb-3 sm:mb-4'>
                        {order.items.map((item: OrderItem) => (
                          <div
                            key={item.id}
                            className='flex gap-3 sm:gap-4 items-start'
                          >
                            <img
                              src={item.ebook.coverImage}
                              alt={item.ebook.title}
                              className='w-12 h-16 sm:w-16 sm:h-20 object-cover rounded flex-shrink-0'
                            />
                            <div className='flex-1 min-w-0'>
                              <h4 className='font-semibold text-sm sm:text-base text-gray-800 line-clamp-2'>
                                {item.ebook.title}
                              </h4>
                              <p className='text-xs sm:text-sm text-gray-600'>
                                {item.ebook.author}
                              </p>
                              <p className='text-xs sm:text-sm font-semibold text-gray-800 mt-1'>
                                ${item.priceAtPurchase.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className='border-t border-gray-200 pt-3 space-y-1'>
                        <div className='flex justify-between text-xs sm:text-sm'>
                          <span className='text-gray-600'>Total Amount</span>
                          <span className='font-semibold text-gray-800'>
                            ${order.totalAmount.toFixed(2)}
                          </span>
                        </div>
                        {order.creditsUsed > 0 && (
                          <div className='flex justify-between text-xs sm:text-sm'>
                            <span className='text-gray-600'>Credits Used</span>
                            <span className='font-semibold text-green-600'>
                              -{order.creditsUsed}
                            </span>
                          </div>
                        )}
                        <div className='flex justify-between text-xs sm:text-sm font-bold'>
                          <span className='text-gray-800'>Amount Paid</span>
                          <span className='text-gray-800'>
                            ${order.amountPaid.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex justify-center'>
                  <Pagination
                    defaultPageStart={currentPage}
                    total={ordersData.total}
                    defaultPageSize={pageSize}
                    onChange={handlePaginationChange}
                  />
                </div>
              </>
            ) : (
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
          </>
        )}
      </div>
    </div>
  );
}
