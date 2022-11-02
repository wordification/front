"use client";

import { Typography } from "antd";
import { useSession } from "next-auth/react";

import Layout from "../../src/components/Layout";

const { Title } = Typography;

const Page = () => {
  const { data } = useSession();
  if (!data) return null;
  const { user } = data;
  return (
    <Layout title={`${user.name}'s Profile`}>
      <Title level={3}>Stats</Title>
    </Layout>
  );
};

export default Page;
