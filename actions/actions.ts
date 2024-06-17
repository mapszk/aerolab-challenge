"use server";

import { revalidatePath } from "next/cache";

export async function getProducts() {
  await fetch(process.env.API_BASE_URL + "/products", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
    .then((res) => {
      if (!res.ok) return res.statusText;
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getUser() {
  await fetch(process.env.API_BASE_URL + "/user/me", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { tags: ["user"] },
    cache: "no-store",
  })
    .then((res) => {
      if (!res.ok) return res.statusText;
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function addPoints(amount: number) {
  revalidatePath("user");
  await fetch(process.env.API_BASE_URL + "/user/points", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({ amount }),
  })
    .then((res) => {
      if (!res.ok) return res.statusText;
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getHistory() {
  await fetch(process.env.API_BASE_URL + "/user/history", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
    .then((res) => {
      if (!res.ok) return res.statusText;
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function redeemProduct(productId: string) {
  revalidatePath("user");
  await fetch(process.env.API_BASE_URL + "/redeem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({ productId }),
  })
    .then((res) => {
      if (!res.ok) return res.statusText;
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
