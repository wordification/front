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

  if (!res.ok) {
    let data: unknown;
    try {
      data = await res.json();
    } catch (e) {
      try {
        data = await res.text();
      } catch (subError) {
        data = e ?? subError;
      }
    }

    throw new Error(
      `Request failed with status ${res.status}, text ${
        res.statusText
      } and data ${JSON.stringify(data)}`
    );
  }

  return {
    ...res,
    json: async () => {
      try {
        const data = (await res.json()) as T;
        return data;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(`Failed to parse JSON: ${JSON.stringify(err)}`);
        }
        throw new Error("Failed to parse JSON");
      }
    },
  };
};

export default fetchBase;
