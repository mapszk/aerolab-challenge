import { IProductCard } from "@/interfaces/Product";
import HistoryCard from "./HistoryCard";
import Link from "next/link";
import Image from "next/image";

interface Props {
  history: IProductCard[];
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function HistoryList({ history, searchParams }: Props) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const pageSize = 5;

  const showNextPage = currentPage < Math.ceil(history.length / pageSize);
  const showPrevPage = currentPage > 1;
  const nextPageLink = {
    pathname: "/history",
    query: {
      ...searchParams,
      page: currentPage + 1,
    },
  };
  const prevPageLink = {
    pathname: "/history",
    query: {
      ...searchParams,
      page: currentPage - 1,
    },
  };

  return (
    <>
      <span className="text-2xl mb-4 text-gray-600">
        Total spent:{" "}
        {history.reduce(
          (acc: number, current: IProductCard) => acc + current.cost,
          0
        )}{" "}
        points
      </span>
      <section className="my-12 mt-6 flex flex-col gap-4">
        {history
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((product) => (
            <HistoryCard key={product._id} product={product} />
          ))}
      </section>
      <div className="flex justify-between items-center border-b-[1px] pb-6">
        <span className="text-xl text-gray-600">
          {pageSize} of {history.length} products
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
    </>
  );
}
