import "./searchBar.css";

//SearchBar
const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Busca un producto"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
