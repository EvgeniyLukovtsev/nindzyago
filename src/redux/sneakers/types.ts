export interface FetchType {
  sortBy: string;
  order: string;
  category: string;
  currentPage: number;
  search: string;
}

export interface SneakersItem {
  id: number;
  name: string;
  price: number;
  sizes: number[];
  imageUrl: string;
  imagesUrl: string[]
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface SneakersSliceState {
  items: SneakersItem[];
  status: Status;
}
