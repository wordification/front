import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      authorize: async (credentials) => {
        if (!process.env.API_BASE_URL) {
          throw new Error("API URL not set!");
        }
        const res = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          body: new URLSearchParams(credentials),
        });

        // If no error, return it
        if (res.ok) {
          const { user, token } =
            (await res.json()) as WordificationApi.LoginResponse;

          return {
            id: user.email,
            email: user.email,
            username: user.username,
            dateJoined: user.date_joined,
            spellingLevel: user.spelling_level,
            timePlayed: user.time_played,
            percentCorrect: user.percent_correct,
            accessToken: token,
          };
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user,
          accessToken: user.accessToken,
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
};

export default NextAuth(authOptions);
