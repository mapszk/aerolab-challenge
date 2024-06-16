"use client";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import Button from "../Button";
import { useState } from "react";
import { addPoints } from "@/actions/actions";

interface Props {
  points: number;
}

export default function Points({ points }: Props) {
  const [loading, setLoading] = useState(false);
  const add = async (amount: number) => {
    setLoading(true);
    await addPoints(amount);
    setLoading(false);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="rounded-[100px] bg-gray-200 p-2 px-3 flex gap-2 items-center text-2xl text-gray-600">
          {points}
          <Image width={24} height={24} alt="Coin icon" src="/icons/coin.svg" />
        </button>
      </Popover.Trigger>
      <Popover.Content
        align="end"
        className="w-[350px] rounded-3xl bg-gray-200 p-2 shadow-lg mt-2 right-0"
      >
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
      </Popover.Content>
    </Popover.Root>
  );
}
