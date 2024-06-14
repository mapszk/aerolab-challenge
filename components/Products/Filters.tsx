"use client";
import { productsFilters } from "@/constants/Products";
import Image from "next/image";
import { useState } from "react";

interface Props {
  onPrevPage: () => void;
  onNextPage: () => void;
  currentPage: number;
  productsTotalCount: number;
  pageSize: number;
}

export default function Filters({
  onPrevPage,
  onNextPage,
  currentPage,
  productsTotalCount,
  pageSize,
}: Props) {
  const [activeFilter, setActiveFilter] = useState(productsFilters.mostRecent);

  return (
    <div className="flex flex-col lg:gap-5 lg:flex-row items-center text-xl lg:text-xl border-b-[1px] pb-5">
      <span className="text-gray-600 mb-4 lg:mb-0">
        {pageSize} of {productsTotalCount} products
      </span>
      <div className="hidden h-12 lg:block border-l-[1px]"></div>
      <span className="text-gray-400 text-lg lg:text-xl mb-2 lg:mb-0">
        Sort by:
      </span>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-3 lg:gap-5 items-center">
        <button
          onClick={() => setActiveFilter(productsFilters.mostRecent)}
          className="w-full lg:w-auto h-10 lg:h-12 px-5 text-base lg:text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Most recent
        </button>
        <button
          onClick={() => setActiveFilter(productsFilters.lowestPrice)}
          className="w-full lg:w-auto h-10 lg:h-12 px-5 text-base lg:text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Lowest price
        </button>
        <button
          onClick={() => setActiveFilter(productsFilters.highestPrice)}
          className="w-full lg:w-auto h-10 lg:h-12 px-5 text-base lg:text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Highest price
        </button>
      </div>
      <div className="w-full lg:w-auto lg:ml-auto lg:gap-4 flex justify-between lg:justify-start mt-4 lg:mt-0">
        <button disabled={currentPage === 0} onClick={onPrevPage}>
          <Image
            width={48}
            height={48}
            alt="Arrow right"
            src="/icons/arrow-left.svg"
          />
        </button>
        <button
          disabled={currentPage === Math.ceil(productsTotalCount / 16) - 1}
          onClick={onNextPage}
        >
          <Image
            width={48}
            height={48}
            alt="Arrow right"
            src="/icons/arrow-right.svg"
          />
        </button>
      </div>
    </div>
  );
}
