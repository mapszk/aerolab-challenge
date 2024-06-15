import { IProductCard } from "@/interfaces/Product";

export const productsFilters = {
  mostRecent: 1,
  lowestPrice: 2,
  highestPrice: 3,
};

export const productsFiltersData = [
  {
    name: "mostRecent",
    id: 1,
    sort: (a: IProductCard, b: IProductCard) => a._id.localeCompare(b._id),
  },
  {
    name: "lowestPrice",
    id: 2,
    sort: (a: IProductCard, b: IProductCard) => (a.cost < b.cost ? -1 : 1),
  },
  {
    name: "highestPrice",
    id: 3,
    sort: (a: IProductCard, b: IProductCard) => (a.cost > b.cost ? -1 : 1),
  },
];
