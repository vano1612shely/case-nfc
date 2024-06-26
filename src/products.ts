export enum Model {
  Iphone15 = "Iphone 15",
  Iphone15Pro = "Iphone 15 pro",
  Iphone15ProMax = "Iphone 15 pro max",
}

export enum Color {
  Black = "Чорний",
  White = "Білий",
  Gray = "Сірий",
}
export type ProductType = {
  color: Color;
  model: Model;
  image: string;
  price: number;
};

export const colorImages = {
  Black: "15promax_black.png",
  White: "15promax_white.png",
  Gray: "15promax_gray.png",
};

export const products: ProductType[] = [
  {
    color: Color.Black,
    model: Model.Iphone15,
    image: "15_black.png",
    price: 1299,
  },
  {
    color: Color.White,
    model: Model.Iphone15,
    image: "15_white.png",
    price: 1299,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15,
    image: "15_gray.png",
    price: 1299,
  },
  {
    color: Color.Black,
    model: Model.Iphone15Pro,
    image: "15promax_black.png",
    price: 1299,
  },
  {
    color: Color.White,
    model: Model.Iphone15Pro,
    image: "15promax_white.png",
    price: 1299,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15Pro,
    image: "15promax_gray.png",
    price: 1299,
  },
  {
    color: Color.Black,
    model: Model.Iphone15ProMax,
    image: "15promax_black.png",
    price: 1299,
  },
  {
    color: Color.White,
    model: Model.Iphone15ProMax,
    image: "15promax_white.png",
    price: 1299,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15ProMax,
    image: "15promax_gray.png",
    price: 1299,
  },
];
