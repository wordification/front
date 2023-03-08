import { getServerSession } from "next-auth/next";

import fetchServer from "../../lib/fetchServer";
import { authOptions } from "../../src/pages/api/auth/[...nextauth]";

import SessionInfo from "./SessionInfo";

const getData = async () => fetchServer<WordificationApi.User>("/auth/user");

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userInfo = await getData();

  if (!session) {
    throw new Error("No session");
  }

  return <SessionInfo session={session} userInfo={userInfo.data} />;
};

export default Page;
