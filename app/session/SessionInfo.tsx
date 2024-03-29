import SessionClient from "./SessionClient";

import type { Session } from "next-auth";

const Home = ({
  session,
  userInfo,
}: {
  session: Session;
  userInfo: WordificationApi.User;
}) => (
  <div>
    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js 13</a>,{" "}
        {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
        {session?.user?.username}!
      </h1>

      <p>
        Here is some <em>server-side</em> information about yourself (according
        to our database):
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <hr />
      <SessionClient />
      <hr />
      <p>
        Here is some Wordification server info about yourself (according to our
        database):
      </p>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </main>
  </div>
);

export default Home;
