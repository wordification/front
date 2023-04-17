import getCurrentSession from "@/lib/user/getCurrentSession";

/**
 * Returns the currently logged in user
 *
 * @returns The currently logged in user
 * @throws Error if no user is logged in or no session is found
 */
const getCurrentUser = async () => {
  const session = await getCurrentSession();

  return session.user;
};

export default getCurrentUser;
