import { IProductCard } from "@/interfaces/Product";

export const productsFilters = {
  mostRecent: 1,
  lowestPrice: 2,
  highestPrice: 3,
};

const mostRecentSort = (a: IProductCard, b: IProductCard) => a._id - b._id;

const lowestPriceSort = (a: IProductCard, b: IProductCard) => a.cost < b.cost;

const highestPriceSort = (a: IProductCard, b: IProductCard) => a.cost > b.cost;
