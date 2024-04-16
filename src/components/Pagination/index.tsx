import ReactPaginate from "react-paginate";

import style from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <div>
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={12}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  </div>
);

export default Pagination;
