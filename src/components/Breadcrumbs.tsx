import { Breadcrumb } from "antd";
import Link from "next/link";

import type { LinkProps } from "next/link";

const Breadcrumbs = ({
  items,
}: {
  items: {
    label: string;
    href?: LinkProps["href"];
  }[];
}) => (
  <Breadcrumb style={{ margin: "16px 0" }}>
    {items.map(({ label, href }) => (
      <Breadcrumb.Item key={label}>
        {href ? <Link href={href}>{label}</Link> : label}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default Breadcrumbs;
