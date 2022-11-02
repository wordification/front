"use client";

import { Typography, List } from "antd";

const { Text, Title } = Typography;
const HomePage = ({
  updates,
}: {
  updates: { title: string; date: string; content: string }[];
}) => (
  <>
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
  </>
);

export default HomePage;
