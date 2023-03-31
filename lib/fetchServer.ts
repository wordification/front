import { getServerSession } from "next-auth";

import { authOptions } from "../src/pages/api/auth/[...nextauth]";

const fetchServer = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  if (!process.env.API_BASE_URL) {
    throw new Error("API_BASE_URL not set");
  }

  const baseUrl =
    typeof input === "string" && input.startsWith("/")
      ? `${process.env.API_BASE_URL}${input}`
      : input;
  const session = await getServerSession(authOptions);

  const accessToken = session?.accessToken;

  const headers = accessToken
    ? { ...init?.headers, Authorization: `Token ${accessToken}` }
    : { ...init?.headers };
  const res = await fetch(baseUrl, { ...init, headers });
  const data = (await res.json()) as T;
  return {
    status: res.status,
    statusText: res.statusText,
    ok: res.ok,
    data,
  };
};

export default fetchServer;
