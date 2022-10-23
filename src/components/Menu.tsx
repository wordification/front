import { Menu as AntdMenu, Typography } from "antd";
import { useRouter } from "next/router";

import type { ItemType } from "antd/lib/menu/hooks/useItems";

const { Title } = Typography;

const Menu = () => {
  const router = useRouter();
  const items: ItemType[] = [
    {
      key: "home",
      onClick: () => void router.push("/"),
      label: (
        <Title
          style={{
            color: "white",
            fontSize: "1.5rem",
            margin: "1rem",
          }}
        >
          Wordification
        </Title>
      ),
    },
    {
      key: "/about",
      label: "About",
      onClick: () => void router.push("/about"),
    },
    {
      key: "/games",
      label: "Games",
      onClick: () => void router.push("/games"),
    },
    {
      key: "/profile",
      label: "Profile",
      onClick: () => void router.push("/profile"),
    },
  ];
  return (
    <AntdMenu
      theme="dark"
      mode="horizontal"
      items={items}
      selectedKeys={[`${router.asPath}`]}
    />
  );
};

export default Menu;
