"use client";

import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Providers from "./providers";

import type { ItemType } from "antd/lib/menu/hooks/useItems";

const { Header, Content, Footer } = Layout;

const { Title } = Typography;
const menuItems: ItemType[] = [
  {
    key: "home",
    label: (
      <Link href="/">
        <Title
          style={{
            color: "white",
            fontSize: "1.5rem",
            margin: "1rem",
          }}
        >
          Wordification
        </Title>
      </Link>
    ),
  },
  {
    key: "/about",
    label: <Link href="/about">About</Link>,
  },
  {
    key: "/games",
    label: <Link href="/games">Games</Link>,
  },
  {
    key: "/profile",
    label: <Link href="/profile">Profile</Link>,
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Wordification</title>
      </head>
      <body>
        <Providers>
          <Layout className="layout">
            <Header>
              <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                selectedKeys={[pathname]}
              />
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <div style={{ minHeight: 280, padding: 24, background: "#fff" }}>
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              &copy; 2022 Wordification
            </Footer>
          </Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
