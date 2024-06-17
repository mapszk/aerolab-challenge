"use client";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import Button from "../Button";
import { addPoints } from "@/actions/actions";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Info() {
  const [loading, setLoading] = useState(false);
  const add = async (amount: number) => {
    try {
      setLoading(true);
      await addPoints(amount);
      toast.success("Points added!");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white w-full h-full rounded-3xl">
      <div className="relative mb-3 flex">
        <Popover.Close
          className="h-12 grow px-4 bg-gray-200 rounded-xl text-gray-600 flex items-center text-2xl"
          asChild
        >
          <Link href="/history">See history</Link>
        </Popover.Close>
        <Image
          className="absolute right-0 -top-2"
          width={40}
          height={40}
          alt="Aerolab"
          src="/aerolab-logo.svg"
        />
      </div>
      <div className="flex gap-2 w-full">
        <Button disabled={loading} onClick={() => add(7500)}>
          +7500
          <Image
            className="ml-1"
            width={20}
            height={20}
            alt="Coin"
            src="/icons/coin.svg"
          />
        </Button>
        <Button disabled={loading} onClick={() => add(5000)}>
          +5000
          <Image
            className="ml-1"
            width={20}
            height={20}
            alt="Coin"
            src="/icons/coin.svg"
          />
        </Button>
        <Button disabled={loading} onClick={() => add(1000)}>
          +1000
          <Image
            className="ml-1"
            width={20}
            height={20}
            alt="Coin"
            src="/icons/coin.svg"
          />
        </Button>
      </div>
    </div>
  );
}
