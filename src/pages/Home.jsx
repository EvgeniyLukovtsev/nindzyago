import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import SneakersBlock from "../components/SneakersBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import style from "./Home.module.css";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

export default function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);    
  const { searchValue } = useContext(SearchContext);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `categories=${categoryId}` : "";

    fetch(
      `https://65cb6200efec34d9ed8763e5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const sneakers = items.filter((obj) => {
    if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </>
      <h3>Все кроссовки</h3>
      <div className={style.container}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : sneakers.map(({ name, sizes, price, imageUrl, id }) => (
              <SneakersBlock
                name={name}
                sizes={sizes}
                price={price}
                imageUrl={imageUrl}
                key={id}
              />
            ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
