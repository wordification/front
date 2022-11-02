"use client";

import { Typography } from "antd";
import { useSession } from "next-auth/react";

const { Title } = Typography;

const Page = () => {
  const { data } = useSession();
  if (!data) return null;
  const { user } = data;
  return (
    <>
      <Title level={2}>{`${user.name}'s profile`}</Title>
      <Title level={3}>Stats</Title>
    </>
  );
};

export default Page;
