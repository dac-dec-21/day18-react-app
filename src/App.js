export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light p-3 sticky-top">
        <div className="col h3 ">React</div>
      </div>

      {list.map((item) => (
        <div className="row">
          <div className="col-12 bg-secondary text-light p-3 mb-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            eos fugiat recusandae accusamus? Illum odit ipsa rem labore
            officiis, fugiat dignissimos praesentium doloribus delectus
            similique soluta deserunt! Debitis, expedita facere!
          </div>
        </div>
      ))}
    </div>
  );
}
