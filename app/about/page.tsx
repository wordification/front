"use client";

import { Typography } from "antd";

import Layout from "../../src/components/Layout";

const { Title } = Typography;

const Page = () => (
  <Layout title="About Wordification">
    <Title level={3}>What is Wordification?</Title>
    <Title level={3}>What is our goal?</Title>
    <Title level={3}>Who made Wordification?</Title>
  </Layout>
);

export default Page;
