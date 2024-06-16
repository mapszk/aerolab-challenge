import { productsFilters, productsFiltersData } from "@/constants/Products";
import { IProductCard } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  currentPage: number;
  products: IProductCard[];
  pageSize: number;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Filters({
  currentPage,
  products,
  pageSize,
  searchParams,
}: Props) {
  const activeFilter = searchParams.filter
    ? Number(searchParams.filter)
    : productsFilters.mostRecent;

  const showNextPage = currentPage < Math.ceil(products.length / pageSize);
  const showPrevPage = currentPage > 1;
  const nextPageLink = {
    pathname: "/",
    query: {
      ...searchParams,
      page: currentPage + 1,
    },
  };
  const prevPageLink = {
    pathname: "/",
    query: {
      ...searchParams,
      page: currentPage - 1,
    },
  };
  const getFilterLink = (filter: number) => ({
    pathname: "/",
    query: { filter },
  });

  const filterClasses =
    "w-full flex items-center lg:w-auto h-10 lg:h-12 px-5 text-base lg:text-xl rounded-2xl";
  const defaultFilterClasses = `${filterClasses} bg-gray-200 text-gray-400`;
  const activeFilterClasses = `${filterClasses} bg-brandCyan text-white`;

  return (
    <div className="flex flex-col lg:gap-5 lg:flex-row items-center text-xl lg:text-xl border-b-[1px] pb-5">
      <span className="text-gray-600 mb-4 lg:mb-0">
        {products.slice(0, currentPage * pageSize).length} of {products.length}{" "}
        products
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
          <Link className="lg:ml-auto" href={prevPageLink}>
            <Image
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-left.svg"
            />
          </Link>
        )}
        {showNextPage && (
          <Link className="ml-auto lg:ml-4" href={nextPageLink}>
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
