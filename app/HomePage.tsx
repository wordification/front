const HomePage = ({
  updates,
}: {
  updates: readonly { title: string; date: string; content: string }[];
}) => (
  <>
    <h2 className="sr-only">Home</h2>
    <h3 className="text-xl font-bold">Updates</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {updates.map((update) => (
        <div className="card shadow-xl" key={`${update.title}-${update.date}`}>
          <div className="card-body">
            <h4 className="card-title">{update.title}</h4>
            <p>{update.content}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{update.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default HomePage;
