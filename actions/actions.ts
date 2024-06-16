"use server";

import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    const res = await fetch(process.env.API_BASE_URL + "/products", {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    if (!res.ok) return res.statusText;
    else return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getUser() {
  try {
    const res = await fetch(process.env.API_BASE_URL + "/user/me", {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      next: { tags: ["user"] },
      cache: "no-store",
    });
    if (!res.ok) return res.statusText;
    else return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function addPoints(amount: number) {
  try {
    const res = await fetch(process.env.API_BASE_URL + "/user/points", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify({ amount }),
    });
    if (!res.ok) return res.statusText;
    else return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getHistory() {
  try {
    const res = await fetch(process.env.API_BASE_URL + "/user/history", {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    if (!res.ok) return res.statusText;
    else return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function redeemProduct(productId: string) {
  try {
    revalidatePath("user");
    const res = await fetch(process.env.API_BASE_URL + "/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify({ productId }),
    });
    if (!res.ok) return res.statusText;
    else return res.json();
  } catch (err) {
    console.log(err);
  }
}
