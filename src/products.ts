export enum Model {
  Iphone15 = "Iphone 15",
  Iphone15Pro = "Iphone 15 pro",
  Iphone15ProMax = "Iphone 15 pro max",
}

export enum Color {
  Black = "Schwarz",
  White = "Weiß",
  Gray = "Grau",
}
export type ProductType = {
  color: Color;
  model: Model;
  image: string;
  price: number;
  oldPrice: number;
};

export const colorImages = {
  Black: "black.png",
  White: "white.png",
  Gray: "gray.png",
};

export const products: ProductType[] = [
  {
    color: Color.Black,
    model: Model.Iphone15,
    image: "black.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.White,
    model: Model.Iphone15,
    image: "white.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15,
    image: "gray.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.Black,
    model: Model.Iphone15Pro,
    image: "black.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.White,
    model: Model.Iphone15Pro,
    image: "white.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15Pro,
    image: "gray.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.Black,
    model: Model.Iphone15ProMax,
    image: "black.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.White,
    model: Model.Iphone15ProMax,
    image: "white.png",
    price: 50,
    oldPrice: 60,
  },
  {
    color: Color.Gray,
    model: Model.Iphone15ProMax,
    image: "gray.png",
    price: 50,
    oldPrice: 60,
  },
];
