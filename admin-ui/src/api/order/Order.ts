import { Customer } from "../customer/Customer";
import { Drink } from "../drink/Drink";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  drink?: Drink | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
