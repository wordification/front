import { Typography } from "antd";
import { useSession } from "next-auth/react";
import React from "react";

import Layout from "../components/Layout";

const { Title } = Typography;

const Profile = () => {
  const { data } = useSession();
  if (!data) return null;
  const { user } = data;

  return (
    <Layout title={`${user.name}'s Profile`}>
      <Title level={3}>Stats</Title>
    </Layout>
  );
};

export default Profile;
