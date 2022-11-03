"use client";

import { useSession } from "next-auth/react";

const Page = () => {
  const { data } = useSession();
  if (!data) return null;
  const { user } = data;
  return (
    <>
      <h2>{`${user.name}'s profile`}</h2>
      <h3>Stats</h3>
    </>
  );
};

export default Page;
