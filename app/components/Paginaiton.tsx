import { useState } from "react";

interface PaginationProps {
  defaultPageStart?: number;
  total?: number;
  defaultPageSize?: number;
  onChange?: (page: number, count: number) => void;
}

export default function Pagination({
  defaultPageStart = 1,
  total = 1,
  defaultPageSize = 10,
  onChange,
}: PaginationProps) {
  const [itemsPerPage, setItemsPerPage] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(defaultPageStart);
  const [jumpToPageInput, setJumpToPageInput] = useState("");

  const totalPages = Math.ceil(total / itemsPerPage);

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pagesToShow = new Set([
      1,
      2,
      totalPages - 1,
      totalPages,
      currentPage,
      currentPage - 1,
      currentPage + 1,
    ]);

    const sortedPages = Array.from(pagesToShow)
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);

    const visiblePages: (number | string)[] = [];
    let lastPage = 0;
    for (const page of sortedPages) {
      if (lastPage !== 0 && page > lastPage + 1) {
        visiblePages.push("...");
      }
      visiblePages.push(page);
      lastPage = page;
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    onChange && onChange(1, newItemsPerPage);
    setCurrentPage(1);
  };

  const handleOnPageChange = (page: number, count: number) => {
    onChange && onChange(page, count);
    setCurrentPage(page);
  };

  const handleJumpToPageInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJumpToPageInput(e.target.value);
  };

  const handleJumpToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pageNumber = parseInt(jumpToPageInput, 10);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      handleOnPageChange(pageNumber, itemsPerPage);
    }
    setJumpToPageInput("");
  };

  return (
    <nav className='flex flex-wrap items-center gap-x-4 gap-y-2'>
      <ul className='flex space-x-2'>
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={() => handleOnPageChange(currentPage - 1, itemsPerPage)}
            className='flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none'
          >
            <FiChevronLeft className='w-5 h-5 text-gray-700' />
          </button>
        </li>

        {visiblePages.map((page, index) => (
          <li key={page === "..." ? `ellipsis-${index}` : page}>
            {page === "..." ? (
              <span className='flex items-center justify-center w-8 h-8 text-gray-700'>
                ...
              </span>
            ) : (
              <button
                onClick={() => handleOnPageChange(page as number, itemsPerPage)}
                disabled={currentPage === page}
                className={`flex items-center justify-center w-8 h-8 rounded-md ${
                  currentPage === page
                    ? "bg-primary text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } focus:outline-none`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => handleOnPageChange(currentPage + 1, itemsPerPage)}
            className='flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none'
          >
            <FiChevronRight className='w-5 h-5 text-gray-700' />
          </button>
        </li>
      </ul>

      <form onSubmit={handleJumpToPage} className='flex items-center gap-2'>
        <input
          type='number'
          value={jumpToPageInput}
          onChange={handleJumpToPageInputChange}
          className='w-16 h-8 px-2 text-center border border-gray-300 rounded-md focus:outline-none'
          placeholder={`1-${totalPages}`}
          min='1'
          max={totalPages}
        />
        <button
          type='submit'
          className='flex items-center justify-center h-8 px-4 text-sm text-white rounded-md bg-primary hover:opacity-90 focus:outline-none'
        >
          Go
        </button>
      </form>

      <div>
        <select
          id='itemsPerPage'
          className='h-8 min-w-[110px] px-2 py-1 border border-gray-300 rounded focus:outline-none'
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value='10'>10/Page</option>
          <option value='20'>20/Page</option>
          <option value='50'>50/Page</option>
          <option value='100'>100/Page</option>
        </select>
      </div>
    </nav>
  );
}

export function FiChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth={2}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      {...props}
    >
      <polyline points='15 18 9 12 15 6' />
    </svg>
  );
}

export function FiChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth={2}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      {...props}
    >
      <polyline points='9 18 15 12 9 6' />
    </svg>
  );
}
