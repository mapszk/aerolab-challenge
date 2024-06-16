import { IProductCard } from "@/interfaces/Product";
import Image from "next/image";

interface Props {
  product: IProductCard;
}

export default function HistoryCard({ product }: Props) {
  return (
    <div className="bg-white p-4 h-32 flex">
      <div className="relative mr-4 w-32 h-full">
        <Image
          fill={true}
          className="absolute object-cover"
          alt={product.name}
          src={product.img.url}
        />
      </div>
      <div className="flex flex-col h-full">
        <h2 className="text-2xl">{product.name}</h2>
        <span className="text-gray-400">{product.category}</span>
        <div className="flex gap-2 mt-auto text-gray-600 text-2xl">
          {product.cost}
          <Image width={20} height={20} alt="Coin" src="/icons/coin.svg" />
        </div>
      </div>
    </div>
  );
}
