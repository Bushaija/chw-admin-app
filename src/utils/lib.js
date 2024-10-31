"use server"
import { cookies } from "next/headers";

export async function getSession() {
  const session = await cookies().get('session_id')?.value;
  if (!session) return null;
  return session;
}