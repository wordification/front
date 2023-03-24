import { getServerSession } from "next-auth";
import "server-only";

import { authOptions } from "../../src/pages/api/auth/[...nextauth]";

import fetchBase from "./fetchBase";

const fetchServer = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  return fetchBase<T>(input, init, accessToken);
};

export default fetchServer;
