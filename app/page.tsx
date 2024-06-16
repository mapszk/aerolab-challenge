import { getProducts } from "@/actions/actions";
import Banner from "@/components/Banner";
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
      <Banner title="Electronics" />
      <Container className="my-8 lg:my-16">
        <ProductsList products={data} searchParams={searchParams} />
      </Container>
    </main>
  );
}
