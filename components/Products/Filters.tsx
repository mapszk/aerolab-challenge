"use client";
import { productsFilters } from "@/constants/Products";
import Image from "next/image";
import { useState } from "react";

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState(productsFilters.mostRecent);

  return (
    <div className="flex items-center text-xl border-b-[1px] pb-5">
      <span className="text-gray-600">16 of 32 products</span>
      <div className="flex gap-4 items-center border-l-[1px] pl-5 ml-4">
        <span className="text-gray-400">Sort by:</span>
        <button
          onClick={() => setActiveFilter(productsFilters.mostRecent)}
          className="h-12 px-4 text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Most recent
        </button>
        <button
          onClick={() => setActiveFilter(productsFilters.lowestPrice)}
          className="h-12 px-4 text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Lowest price
        </button>
        <button
          onClick={() => setActiveFilter(productsFilters.highestPrice)}
          className="h-12 px-4 text-xl text-gray-400 bg-gray-200 rounded-2xl"
        >
          Highest price
        </button>
      </div>
      <button className="ml-auto">
        <Image
          width={48}
          height={48}
          alt="Arrow right"
          src="/icons/arrow-left.svg"
        />
      </button>
      <button className="ml-4">
        <Image
          width={48}
          height={48}
          alt="Arrow right"
          src="/icons/arrow-right.svg"
        />
      </button>
    </div>
  );
}
