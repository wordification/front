import { Card, List } from "antd";
import { useRouter } from "next/router";
import React from "react";

import Layout from "../../components/Layout";

const Games = () => {
  const router = useRouter();
  const data = [
    {
      title: "Matching",
      content: "Match the cards to win!",
      onClick: () => void router.push("/games/matching"),
    },
    {
      title: "Sorting",
      content: "Sort the cards to win!",
      onClick: () => void router.push("/games/sorting"),
    },
  ];
  return (
    <Layout title="Games">
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable onClick={item.onClick} title={item.title}>
              {item.content}
            </Card>
          </List.Item>
        )}
      />
    </Layout>
  );
};

export default Games;
