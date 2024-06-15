import { getProducts } from "@/actions/actions";
import Container from "@/components/Container";
import ProductsList from "@/components/Products/ProductsList";
import { IProductCard } from "@/interfaces/Product";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data: IProductCard[] = await getProducts();

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-between">
      <header className="h-64 sm:h-[412px] w-full relative bg-[url(/header-x2.png)] bg-center bg-cover">
        <Container className="h-full flex">
          <h1 className="mt-auto mb-10 z-10 text-4xl font-bold text-white">
            Electronics
          </h1>
        </Container>
      </header>
      <Container className="my-16">
        <ProductsList products={data} searchParams={searchParams} />
      </Container>
    </main>
  );
}
