"use client";

import { Card, List } from "antd";
import Link from "next/link";

import Layout from "../../src/components/Layout";

const GamesPage = ({
  games,
}: {
  games: {
    title: string;
    content: string;
    url: string;
  }[];
}) => (
  <Layout title="Games">
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={games}
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

export default GamesPage;
