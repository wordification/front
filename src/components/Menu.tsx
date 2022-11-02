import { Menu as AntdMenu, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { ItemType } from "antd/lib/menu/hooks/useItems";

const { Title } = Typography;

const Menu = () => {
  const pathname = usePathname();
  const items: ItemType[] = [
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
  return (
    <AntdMenu
      theme="dark"
      mode="horizontal"
      items={items}
      selectedKeys={[pathname]}
    />
  );
};

export default Menu;
