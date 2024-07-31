import { CardList } from "../components/outlet/CardList";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const Outlet = async () => {
  const res = await fetch(baseUrl);
  const outlet = await res.json();

  return (
    <div className="p-10">
      <CardList>
        <p>Hello {outlet[0].title}</p>
      </CardList>
      <CardList>
        <p>Hello CardList</p>
      </CardList>
      <CardList>
        <p>Hello CardList</p>
      </CardList>
    </div>
  );
};

export default Outlet;
