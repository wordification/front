/* eslint-disable @typescript-eslint/consistent-type-definitions */

import type { DefaultSession, User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  /**
   * Custom user
   */
  interface User extends WordificationApi.User, DefaultSession.User {
    accessToken: string;
  }

  interface Session extends DefaultSession {
    user: User;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: Exclude<NextAuthUser, "accessToken">;
    accessToken: string;
  }
}
