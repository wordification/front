import Navbar from "../ui/Navbar";

import "./globals.css";
import Providers from "./providers";

const menuItems = [
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/games",
    label: "Games",
  },
  {
    url: "/profile",
    label: "Profile",
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <title>Wordification</title>
    </head>
    <body className="flex flex-col min-h-screen">
      <Providers>
        <header className="bg-base-200">
          <Navbar items={menuItems} />
        </header>
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <footer className="p-4 w-full mx-auto text-center bg-base-300">
          &copy; 2022 Wordification
        </footer>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
