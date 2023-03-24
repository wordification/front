const fetchBase = async <T>(
  input: RequestInfo | URL,
  init: RequestInit | undefined,
  accessToken: string | undefined
) => {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL not set");
  }

  const baseUrl =
    typeof input === "string" && input.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${input}`
      : input;

  const headers = accessToken
    ? { ...init?.headers, Authorization: `Token ${accessToken}` }
    : { ...init?.headers };
  const res = await fetch(baseUrl, { ...init, headers });

  return {
    ...res,
    json: async () => (await res.json()) as T,
    text: async () => (await res.text()) as T,
  };
};

export default fetchBase;
