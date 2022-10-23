import { Typography, List } from "antd";
import React from "react";

import Layout from "../components/Layout";

const { Text, Title } = Typography;
const Index = () => {
  const updates = [
    {
      title: "New Game: Matching",
      date: "2022-10-23",
      content:
        "We've added a new game to the site: Matching. In this game, you'll be given a list of words and you'll have to match them to their sounds.",
    },
    {
      title: "New Game: Sorting",
      date: "2022-08-23",
      content:
        "We've added a new game to the site: Sorting. In this game, you'll be given a list of words and you'll have to sort them into their correct categories.",
    },
  ];

  return (
    <Layout>
      <Title level={3}>Updates</Title>
      <List
        itemLayout="horizontal"
        dataSource={updates}
        renderItem={(item) => (
          <List.Item extra={<Text type="secondary">{item.date}</Text>}>
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
    </Layout>
  );
};

export default Index;
