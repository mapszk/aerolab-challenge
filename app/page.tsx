import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-red-500 flex flex-col items-center justify-between">
      <header className="h-[412px] w-full relative bg-[url(/header-x2.png)] bg-center bg-cover">
        <Container className="h-full flex">
          <h1 className="mt-auto mb-10 z-10 text-4xl font-bold text-white">Electronics</h1>
        </Container>
      </header>
    </main>
  );
}
