"use server";

const appFetch = async (path: string, method = "GET", body?: BodyInit) => {
  return await fetch(`https://billing-hackathon.onrender.com${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ?? null,
  }).then((res) => res.json());
};

export const getOrCreateUser = async (username: string) => {
  let user;
  try {
    user = await appFetch(
      "/users",
      "POST",
      JSON.stringify({ user_name: username })
    );
  } catch (e) {
    console.error(e);
  }

  return user;
};

export const makePurchase = async (username: string) => {
  try {
    return await appFetch(`/users/${username}/buy`, "POST");
  } catch (e) {
    console.error(e);
  }
};

export const getBalance = async (username: string) => {
  try {
    return await appFetch(`/users/${username}/privateAccess`);
  } catch (e) {
    console.error(e);
  }
};
