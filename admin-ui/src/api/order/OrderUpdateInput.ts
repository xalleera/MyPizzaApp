import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DrinkWhereUniqueInput } from "../drink/DrinkWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  drink?: DrinkWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
