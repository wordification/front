"use client";

import Link from "next/link";

import "./globals.css";
import Providers from "./providers";

const menuItems = [
  {
    key: "home",
    label: (
      <Link href="/">
        <h2 className="text-2xl">Wordification</h2>
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
] as const;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <title>Wordification</title>
    </head>
    <body>
      <Providers>
        <header>
          <nav className="h-16 w-full bg-black bg-opacity-50">
            <ul className="w-full h-full flex justify-center items-center">
              {menuItems.map((item) => (
                <li
                  className="flex h-full items-center hover:bg-black hover:bg-opacity-50"
                  key={item.key}
                >
                  <span className="mx-4 text-white">{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main style={{ padding: "0 50px" }}>
          <div style={{ minHeight: 280, padding: 24, background: "#fff" }}>
            {children}
          </div>
        </main>
        <footer style={{ textAlign: "center" }}>
          &copy; 2022 Wordification
        </footer>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
