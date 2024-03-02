import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import SneakersBlock from "../components/SneakersBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import style from "./Home.module.css";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchSneakers } from "../redux/slices/sneakersSlice";
import { list } from "../components/Sort";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state) => state.sneaker);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);

  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getSneakers = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `categories=${categoryId}` : "";

    dispatch(fetchSneakers({ sortBy, order, category, currentPage }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getSneakers();
  }, [categoryId, sortType, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortType === params.sortType);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
  }, []);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
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
      {status === "error" ? (
        <div>
          <h2>Произошла ошибка</h2>
          <p>
            Не удалось получить ответ от сервера. Попробуйте повторить попытку
            позжею
          </p>
        </div>
      ) : (
        <div className={style.container}>
          {status === "loading"
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : sneakers.map(({ name, sizes, price, imageUrl, id }) => (
                <SneakersBlock
                  name={name}
                  sizes={sizes}
                  price={price}
                  imageUrl={imageUrl}
                  key={id}
                  id={id}
                />
              ))}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
