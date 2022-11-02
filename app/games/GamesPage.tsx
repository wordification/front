"use client";

import { Card, List, Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const GamesPage = ({
  games,
}: {
  games: {
    title: string;
    content: string;
    url: string;
  }[];
}) => (
  <>
    <Title>Games</Title>
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
  </>
);

export default GamesPage;
