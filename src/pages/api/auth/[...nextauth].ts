import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!process.env.API_BASE_URL) {
          return null;
        }
        const res = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          body: new URLSearchParams(credentials),
        });

        const { user, token } =
          (await res.json()) as WordificationApi.LoginResponse;

        // If no error, return it
        if (res.ok) {
          return { id: user.email, ...user, access_token: token };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  // events: {
  //   signOut: ({ token }) =>
  //     process.env.API_BASE_URL
  //       ? void fetch(`${process.env.API_BASE_URL}/auth/logout`, {
  //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //           method: "POST",
  //           body: new URLSearchParams({
  //             refresh_token: token.accessToken,
  //           }),
  //         })
  //       : undefined,
  // },
  callbacks: {
    jwt: (stuff) => {
      const { token, user } = stuff;
      // Initial sign in
      if (user) {
        if (!user.access_token) {
          throw new Error("No access token");
        }

        return {
          accessToken: user.access_token,
          user,
        };
      }

      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: token.user,
      accessToken: token.accessToken,
    }),
  },
};

export default NextAuth(authOptions);
