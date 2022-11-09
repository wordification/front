const Page = () => (
  <>
    <h2 className="text-2xl font-bold pb-4">Sorting Game</h2>
    <div className="flex py-4">
      <div className="flex pr-4">
        <label htmlFor="option1">
          Select first option:
          <select
            id="option1"
            className="select select-bordered w-full max-w-xs"
          >
            <option>Short I</option>
            <option>Long I</option>
            <option>Short O</option>
            <option>Long O</option>
          </select>
        </label>
      </div>
      <div className="flex">
        <label htmlFor="option2">
          Select second option:
          <select
            id="option2"
            className="select select-bordered w-full max-w-xs"
          >
            <option>Short I</option>
            <option>Long I</option>
            <option>Short O</option>
            <option>Long O</option>
          </select>
        </label>
      </div>
    </div>
    <button className="btn btn-primary" type="submit">
      Start
    </button>
  </>
);

export default Page;
