"use client";

const HomePage = ({
  updates,
}: {
  updates: { title: string; date: string; content: string }[];
}) => (
  <>
    <h3>Updates</h3>
    {updates.map((update) => (
      <div>
        <h4>{update.title}</h4>
        <p>{update.date}</p>
        <p>{update.content}</p>
      </div>
    ))}
  </>
);

export default HomePage;
