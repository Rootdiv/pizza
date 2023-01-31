export type SortBy = {
  type: string;
  order: string;
};

export type SearchPizzaParams = {
  sortBy: SortBy;
  categoryId: number;
  search: string;
  currentPage: number;
};

type PizzaItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export type Pizzas = {
  pizzas: PizzaItem[];
  page: number;
  pages: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface IPizzaSliceState {
  items: PizzaItem[];
  page: number;
  pages: number;
  status: Status;
}
