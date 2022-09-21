import { OrderCreateNestedManyWithoutDrinksInput } from "./OrderCreateNestedManyWithoutDrinksInput";

export type DrinkCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutDrinksInput;
};
