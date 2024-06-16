import { IProductCard } from "./Product";

export interface IUserData {
  _id: string;
  name: string;
  points: number;
  createDate: string;
  redeemHistory: IProductCard[];
  __v: number;
}
