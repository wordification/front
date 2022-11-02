"use client";

import { Layout } from "antd";
import "antd/dist/antd.css";

import Menu from "../src/components/Menu";

import Providers from "./providers";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <title>Wordification</title>
    </head>
    <body>
      <Providers>
        <Layout className="layout">
          <Header>
            <Menu />
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

export default RootLayout;
