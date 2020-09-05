import { BUY_BOOK } from "./bookType";

export const buyBook = (qty) => {
  return {
    type: BUY_BOOK,
    qty:qty
  };
};
