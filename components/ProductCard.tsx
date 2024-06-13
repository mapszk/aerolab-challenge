import { IProductCard } from "@/interfaces/Product";
import Image from "next/image";

export default function ProductCard({ product }: { product: IProductCard }) {
  return (
    <div className="group bg-white h-[276px] relative w-full shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all transition-ease">
      <div className="cursor-pointer opacity-0 group-hover:opacity-100 transition-ease transition-all flex absolute z-[2] h-full w-full bg-blue-400 bg-opacity-70 flex-col items-center justify-center">
        <div className="flex mb-2 items-center">
          <span className="text-white text-4xl mr-2">{product.cost}</span>
          <Image width={26} height={26} alt="Coin icon" src="/icons/coin.svg" />
        </div>
        <button className="bg-white rounded-full text-center text-gray-600 h-10 w-52">
          Reedem now
        </button>
      </div>
      <div className="p-4 px-5 w-full h-full flex flex-col">
        <button className="absolute z-[3] right-5 group-hover:right-4">
          <Image
            width={42}
            height={42}
            alt="Buy icon"
            src="/icons/buy-blue.svg"
            className="group-hover:hidden"
          />
          <Image
            width={48}
            height={48}
            alt="Buy icon"
            className="group-hover:block hidden"
            src="/icons/buy-white.svg"
          />
        </button>
        <div className="relative w-full grow mb-1 mt-4">
          <Image
            fill={true}
            alt={product.name}
            className="object-cover"
            src={product.img.url}
          />
        </div>
        <div className="border-t-[1px] mb-2 mt-auto"></div>
        <span className="text-sm text-gray-400 block">{product.category}</span>
        <h4 className="text-md text-gray-600 block">{product.name}</h4>
      </div>
    </div>
  );
}
