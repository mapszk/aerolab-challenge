"use server";

export async function getProducts() {
  try {
    const res = await fetch(process.env.API_BASE_URL + "/products", {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    return res.json();
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
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
}
