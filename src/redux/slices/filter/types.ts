export type Sort = {
  name: string;
  sortProperty: string;
};

export interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: Sort;
}
