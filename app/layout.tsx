import Navbar from "../ui/Navbar";

import "./globals.css";
import Providers from "./providers";

const menuItems = [
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/news",
    label: "News",
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
        <header className="bg-base-300">
          <Navbar items={menuItems} />
        </header>
        <main className="container mx-auto p-4 md:px-8 flex-grow">
          {children}
        </main>
        <footer className="p-4 w-full mx-auto text-center bg-base-300">
          <p>&copy; 2022 Wordification</p>
        </footer>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
