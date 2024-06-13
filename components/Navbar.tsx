import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 h-[80px] w-full px-12 bg-white flex justify-between items-center">
      <Image width={39} height={36} alt="Aerolab logo" src="/aerolab-logo.svg" />
      <div className="flex items-center">
        <span className="text-2xl text-gray-600 mr-4">John Kite</span>
        <button className="rounded-[100px] bg-gray-200 p-2 px-3 flex gap-2 items-center text-2xl text-gray-600">
          6000
          <Image width={24} height={24} alt="Coin icon" src="/icons/coin.svg" />
        </button>
      </div>
    </nav>
  )
}