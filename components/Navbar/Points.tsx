"use client";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import Info from "./Info";

interface Props {
  points: number;
}

export default function Points({ points }: Props) {
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
        <Info />
      </Popover.Content>
    </Popover.Root>
  );
}
