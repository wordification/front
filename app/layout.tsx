import Navbar from "../ui/Navbar";

import "./globals.css";
import Providers from "./providers";

const MENU_ITEMS = [
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
  {
    url: "/api/auth/signout",
    label: "Sign Out",
  },
] as const;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <title>Wordification</title>
    </head>
    <body className="flex flex-col min-h-screen">
      <Providers>
        <header className="bg-base-300">
          <Navbar items={MENU_ITEMS} />
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
