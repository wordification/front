/* eslint-disable @typescript-eslint/consistent-type-definitions */

import type { DefaultSession, User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  /**
   * Custom user
   */
  interface User extends DefaultSession.user {
    email: string;
    username: string;
    date_joined: string;
    last_login: string;
    is_admin: boolean;
    is_superuser: boolean;
    is_staff: boolean;
    is_active: boolean;
    first_name: string;
    last_name: string;
    spelling_level: number;
    time_played: number;
    percent_correct: number;
    access_token: string;
  }

  interface Session extends DefaultSession {
    user: User;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: NextAuthUser;
    accessToken: string;
  }
}
