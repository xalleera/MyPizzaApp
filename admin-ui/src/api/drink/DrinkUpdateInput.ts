import { OrderUpdateManyWithoutDrinksInput } from "./OrderUpdateManyWithoutDrinksInput";

export type DrinkUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutDrinksInput;
};
