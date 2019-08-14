import Product from "./product";

export default class Category {
  id: number;
  name: string;
  products?: Product[];
}
