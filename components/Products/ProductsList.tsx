import { IProductCard } from "@/interfaces/Product";
import Image from "next/image";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Props {
  products: IProductCard[];
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductsList({ products, searchParams }: Props) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 0;
  const pageSize = 16;

  const showNextPage = currentPage < Math.ceil(products.length / pageSize) - 1;
  const showPrevPage = currentPage > 0;

  const nextPageLink = {
    pathname: "/",
    query: {
      page: currentPage + 1,
    },
  };
  const prevPageLink = {
    pathname: "/",
    query: {
      page: currentPage - 1,
    },
  };

  return (
    <div>
      <Filters
        currentPage={currentPage}
        pageSize={pageSize}
        searchParams={searchParams}
        productsTotalCount={products.length}
      />
      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(currentPage, pageSize).map((card) => (
          <ProductCard key={card._id} product={card} />
        ))}
      </section>
      <div className="flex justify-between items-center border-b-[1px] pb-6">
        <span className="text-xl text-gray-600">
          {pageSize} of {products.length} products
        </span>
        {showPrevPage && (
          <Link className="ml-auto" href={prevPageLink}>
            <Image
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-left.svg"
            />
          </Link>
        )}
        {showNextPage && (
          <Link className="ml-4" href={nextPageLink}>
            <Image
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-right.svg"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
