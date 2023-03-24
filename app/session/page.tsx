import { getServerSession } from "next-auth/next";

import SessionInfo from "./SessionInfo";

import fetchServer from "@/lib/fetch/fetchServer";
import { authOptions } from "@/src/pages/api/auth/[...nextauth]";

const getData = async () =>
  fetchServer<WordificationApi.User>("/auth/user").then((res) => res.json());

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userInfo = await getData();

  if (!session) {
    throw new Error("No session");
  }

  return <SessionInfo session={session} userInfo={userInfo} />;
};

export default Page;
