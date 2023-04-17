import { getServerSession } from "next-auth";

import { authOptions } from "@/src/pages/api/auth/[...nextauth]";

/**
 * Returns the currently logged in session
 *
 * @returns The currently logged in session
 * @throws Error if no user is logged in or no session is found
 */
const getCurrentSession = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("No session");
  }

  return session;
};

export default getCurrentSession;
