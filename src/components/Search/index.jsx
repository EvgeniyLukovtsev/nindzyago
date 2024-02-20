import { useContext } from "react";
import style from "./Search.module.css";
import { SearchContext } from "../../App";
import clear_logo from "../../assets/images/clear.png";

const Search = () => {
  const { searchValue, setSerchValue } = useContext(SearchContext);

  return (
    <div className={style.root}>
      <input
        value={searchValue}
        onChange={(event) => setSerchValue(event.target.value)}
        className={style.input}
        placeholder="Search..."
      />
      {searchValue && (
        <img
          src={clear_logo}
          onClick={() => setSerchValue("")}
          className={style.clear_logo}
        />
      )}
    </div>
  );
};

export default Search;
