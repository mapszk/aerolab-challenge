import { getUser } from "@/actions/actions";
import { IUserData } from "@/interfaces/User";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const userData: IUserData = await getUser();

  return (
    <nav className="sticky top-0 h-[80px] z-50 w-full px-12 bg-white flex justify-between items-center">
      <Link href="/">
        <Image
          width={39}
          height={36}
          alt="Aerolab logo"
          src="/aerolab-logo.svg"
        />
      </Link>
      <div className="flex items-center">
        <span className="text-2xl text-gray-600 mr-4">{userData.name}</span>
        <button className="rounded-[100px] bg-gray-200 p-2 px-3 flex gap-2 items-center text-2xl text-gray-600">
          {userData.points}
          <Image width={24} height={24} alt="Coin icon" src="/icons/coin.svg" />
        </button>
      </div>
    </nav>
  );
}
