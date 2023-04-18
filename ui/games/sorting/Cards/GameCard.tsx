const GameCard = ({
  title,
  children,
}: {
  title: string;
  // eslint-disable-next-line react/no-unused-prop-types
  files: string[];
  children: React.ReactNode;
}) => (
  <div className="card w-full bg-base-300 shadow-xl">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      {children}
    </div>
    <div className="card-actions justify-end p-4">
      <button className="btn btn-accent" type="button">
        Play Sound Again
      </button>
    </div>
  </div>
);

export default GameCard;
