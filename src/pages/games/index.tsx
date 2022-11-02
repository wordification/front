import { Card, List } from "antd";
import Link from "next/link";
import React from "react";

import Layout from "../../components/Layout";

const Games = () => {
  const data = [
    {
      title: "Sorting",
      content: "Sort the cards to win!",
      url: "/games/sorting",
    },
    {
      title: "Matching",
      content: "Match the cards to win!",
      url: "/games/matching",
    },
  ];
  return (
    <Layout title="Games">
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Link href={item.url}>
              <Card hoverable title={item.title}>
                {item.content}
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </Layout>
  );
};

export default Games;
