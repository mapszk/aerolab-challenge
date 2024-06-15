import { productsFilters } from "@/constants/Products";
import Image from "next/image";
import Link from "next/link";

interface Props {
  currentPage: number;
  productsTotalCount: number;
  pageSize: number;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Filters({
  currentPage,
  productsTotalCount,
  pageSize,
  searchParams,
}: Props) {
  const activeFilter = searchParams.filter
    ? Number(searchParams.filter)
    : productsFilters.mostRecent;

  const showNextPage =
    currentPage < Math.ceil(productsTotalCount / pageSize) - 1;
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
  const getFilterLink = (filter: number) => ({
    pathname: "/",
    query: {
      ...searchParams,
      filter,
    },
  });

  const defaultFilterClasses =
    "w-full flex items-center lg:w-auto h-10 lg:h-12 px-5 text-base lg:text-xl text-gray-400 bg-gray-200 rounded-2xl";
  const activeFilterClasses = `${defaultFilterClasses} bg-blue-500 text-white`;

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
        <Link
          href={getFilterLink(productsFilters.mostRecent)}
          className={
            activeFilter === productsFilters.mostRecent
              ? activeFilterClasses
              : defaultFilterClasses
          }
        >
          Most recent
        </Link>
        <Link
          href={getFilterLink(productsFilters.lowestPrice)}
          className={
            activeFilter === productsFilters.lowestPrice
              ? activeFilterClasses
              : defaultFilterClasses
          }
        >
          Lowest price
        </Link>
        <Link
          href={getFilterLink(productsFilters.highestPrice)}
          className={
            activeFilter === productsFilters.highestPrice
              ? activeFilterClasses
              : defaultFilterClasses
          }
        >
          Highest price
        </Link>
      </div>
      <div className="w-full lg:w-auto lg:ml-auto lg:gap-4 flex justify-between lg:justify-start mt-4 lg:mt-0">
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
