import { Typography } from "antd";
import React from "react";

import Layout from "../components/Layout";

const { Title } = Typography;

const About = () => (
  <Layout title="About Wordification">
    <Title level={3}>What is Wordification?</Title>
    <Title level={3}>What is our goal?</Title>
    <Title level={3}>Who made Wordification?</Title>
  </Layout>
);

export default About;
