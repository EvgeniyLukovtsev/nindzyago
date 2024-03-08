import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import SneakersBlock from "../components/SneakersBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import style from "./Home.module.css";
import Pagination from "../components/Pagination";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchSneakers } from "../redux/asyncThunk";
import { RootState, useAppDispatch } from "../redux/store";

interface SneakersProps {
  name: string;
  sizes: number[];
  price: number;
  imageUrl: string;
  id: number;
}

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state: RootState) => state.sneaker);
  const { sort, categoryId, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  const getSneakers = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `categories=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchSneakers({ sortBy, order, category, currentPage, search }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getSneakers();
  }, [categoryId, sort.sortProperty, currentPage, searchValue]);

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     // const sort = list.find((obj) => obj.sortType === params.sortType);

  //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       })
  //     );
  //   }
  // }, []);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sort.sortProperty, currentPage]);

  const sneakers = items.filter((obj: any) => {
    if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <>
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
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
            : sneakers.map(
                ({ name, sizes, price, imageUrl, id }: SneakersProps) => (
                  <SneakersBlock
                    name={name}
                    sizes={sizes}
                    price={price}
                    imageUrl={imageUrl}
                    key={id}
                    id={id}
                  />
                )
              )}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;