import Container from "./Container";

interface Props {
  title: string;
}

export default function Banner({ title }: Props) {
  return (
    <header className="h-64 sm:h-[412px] w-full relative bg-[url(/header-x2.png)] bg-[center_right_-4rem] md:bg-center bg-cover">
      <Container className="h-full flex">
        <h1 className="mt-auto mb-4 sm:mb-10 z-10 text-4xl sm:text-6xl font-bold text-white">
          {title}
        </h1>
      </Container>
    </header>
  );
}
