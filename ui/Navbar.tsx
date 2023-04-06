import Link from "next/link";

export type MenuItem = {
  url: string;
  label: string;
  submenu?: readonly {
    url: string;
    label: string;
  }[];
};

const NavbarItem = ({ item }: { item: MenuItem }) => (
  <li>
    <Link className="normal-case font-bold" href={item.url}>
      {item.label}
    </Link>
  </li>
);

const Navbar = ({ items }: { items: readonly MenuItem[] }) => (
  <nav className="navbar">
    <div className="navbar-start">
      <h1>
        <Link
          className="normal-case text-xl btn btn-ghost rounded-none text-primary"
          href="/"
        >
          Wordification
        </Link>
      </h1>
    </div>
    <div className="navbar-end">
      <ul className="menu menu-horizontal">
        {items.map((item) => (
          <NavbarItem item={item} key={item.url} />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
