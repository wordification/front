import "client-only";
import { getSession } from "next-auth/react";

import fetchBase from "./fetchBase";

const fetchClient = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const session = await getSession();
  const accessToken = session?.accessToken;

  return fetchBase<T>(input, init, accessToken);
};

export default fetchClient;
