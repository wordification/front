import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from "../../../../lib/axios";

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
        const res = await axios.post<WordificationApi.LoginResponse>(
          "/auth/login",
          new URLSearchParams(credentials),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            timeout: 10000,
          }
        );
        const { user, token } = res.data;

        // If no error, return it
        if (res.status === 200) {
          return { id: user.email, ...user, access_token: token };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  events: {
    signOut: ({ session }) =>
      axios.post(
        "/auth/logout",
        new URLSearchParams({ refresh_token: session.accessToken }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      ),
  },
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
