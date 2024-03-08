import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import { setSearchValue } from "../../redux/slices/filter/slice";
import style from "./Search.module.css";
import clear_logo from "../../assets/images/clear.png";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Search..."
      />
      {value && (
        <img
          src={clear_logo}
          onClick={onClickClear}
          className={style.clear_logo}
        />
      )}
    </div>
  );
};

export default Search;
