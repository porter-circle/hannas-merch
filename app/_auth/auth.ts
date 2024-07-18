"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getOrCreateUser } from "../_api/api";

export async function signIn(formData: FormData) {
  const username = formData.get("username")?.toString();
  if (!username) return;

  const user = await getOrCreateUser(username);

  if (!user) return;

  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const session = { user, expires };

  cookies().set("session", JSON.stringify(session), {
    expires,
    httpOnly: true,
  });
}

export async function signOut() {
  cookies().set("session", "", {
    expires: new Date(0),
  });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return JSON.parse(session);
}

export async function handleSignOut() {
  "use server";
  await signOut();
  redirect("/");
}
