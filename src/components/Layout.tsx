import { Layout as AntdLayout, Typography } from "antd";

import Menu from "./Menu";

const { Header, Content, Footer } = AntdLayout;
const { Title } = Typography;

const Layout = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <AntdLayout className="layout">
    <Header>
      <Menu />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div style={{ minHeight: 280, padding: 24, background: "#fff" }}>
        {title && <Title level={2}>{title}</Title>}
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>&copy; 2022 Wordification</Footer>
  </AntdLayout>
);

export default Layout;
