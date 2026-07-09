import Nav from "./Nav"
import SearchBar from "../search/SearchBar"

const Header = () => {
  return (
       
    <header className="m-2 rounded-2xl bg-teal-900 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-2 py-4 md:flex-row md:items-center md:justify-between">

        <div className="w-full">
      <Nav />
    </div>
      </div>
    </header>
  );
};

export default Header;
