"use server";

const appFetch = async (path: string, method = "GET", body = {}) => {
  return await fetch(`https://billing-hackathon.onrender.com${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

export const getOrCreateUser = async (username: string) => {
  let user;
  try {
    user = await appFetch("/users", "POST", { user_name: username });
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

export const getNotifications = async () => {
  try {
    return await appFetch(`/ping`);
  } catch (e) {
    console.error(e);
  }
};
