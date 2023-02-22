"use client";

import { useSession } from "next-auth/react";

const Page = () => {
  const { data } = useSession();
  if (!data) return null;
  const { user } = data;
  return (
    <>
      <h2 className="text-2xl font-bold">{`${user.username}'s profile`}</h2>
      <h3 className="text-xl">Stats</h3>
    </>
  );
};

export default Page;
