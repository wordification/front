"use client";

import { Breadcrumb, Layout as AntdLayout, Typography } from "antd";
import Link from "next/link";

import Menu from "./Menu";

import type { LinkProps } from "next/link";

const { Header, Content, Footer } = AntdLayout;
const { Title } = Typography;

const Layout = ({
  title,
  breadcrumbs,
  children,
}: {
  title?: string;
  breadcrumbs?: { label: string; href?: LinkProps["href"] }[];
  children: React.ReactNode;
}) => (
  <AntdLayout className="layout">
    <Header>
      <Menu />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      {breadcrumbs && (
        <Breadcrumb style={{ margin: "16px 0" }}>
          {breadcrumbs.map(({ label, href }) => (
            <Breadcrumb.Item key={label}>
              {href ? <Link href={href}>{label}</Link> : label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
      <div style={{ minHeight: 280, padding: 24, background: "#fff" }}>
        {title && <Title level={2}>{title}</Title>}
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>&copy; 2022 Wordification</Footer>
  </AntdLayout>
);

export default Layout;
