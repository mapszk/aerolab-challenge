"use client";
import { IProductCard } from "@/interfaces/Product";
import Image from "next/image";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface Props {
  products: IProductCard[];
}

export default function ProductsList({ products }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const pageSize = 16;

  return (
    <div>
      <Filters
        currentPage={currentPage}
        pageSize={pageSize}
        productsTotalCount={products.length}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />
      <section className="my-12 grid grid-cols-4 gap-6">
        {products.slice(currentPage, pageSize).map((card) => (
          <ProductCard key={card._id} product={card} />
        ))}
      </section>
      <div className="flex justify-between items-center border-b-[1px] pb-6">
        <span className="text-xl text-gray-600">
          {pageSize} of {products.length} products
        </span>
        <button
          className="ml-auto"
          disabled={currentPage === 0}
          onClick={prevPage}
        >
          <Image
            width={48}
            height={48}
            alt="Arrow right"
            src="/icons/arrow-left.svg"
          />
        </button>
        <button
          className="ml-4"
          disabled={currentPage === Math.ceil(products.length / 16) - 1}
          onClick={nextPage}
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
