const Board = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="card w-full bg-base-300 shadow-xl">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      {children}
    </div>
  </div>
);

export default Board;