"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { Color, colorImages, Model, products, ProductType } from "@/products";
import { useEffect, useState } from "react";
import RequestDialog from "@/components/RequestDialog";

export default function MakeYourChoice({ className }: { className?: string }) {
  const [product, setProduct] = useState<ProductType>(products[0]);
  const [model, setModel] = useState<Model>(Model.Iphone15ProMax);
  const [color, setColor] = useState<Color>(Color.Black);

  useEffect(() => {
    const newProduct = products.find(
      (p) => p.color === color && p.model === model,
    );
    if (newProduct) setProduct(newProduct);
  }, [model, color]);
  return (
    <div className={clsx(className, "px-5 md:px-40")} id="cases">
      <h1 className="font-semibold text-4xl lg:text-5xl leading-[50px] mb-20 text-center md:text-left">
        Зробіть свій вибір
      </h1>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="flex-1 flex w-[200px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src={"/" + product.image}
            width={250}
            height={250}
            alt="product"
            className="m-auto pointer-events-none select-none object-contain h-full"
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Ціна :</h3>
            <div className="flex gap-2">
              {Object.keys(colorImages).map((key) => {
                const c = colorImages[key as keyof typeof colorImages];
                return (
                  <button
                    key={key}
                    className={clsx(
                      color === Color[key as keyof typeof Color] &&
                        "border-orange-400",
                      "border bg-transparent rounded w-16 h-16 hover:bg-muted duration-200",
                    )}
                    onClick={() => setColor(Color[key as keyof typeof Color])}
                  >
                    <Image
                      className="m-auto"
                      width={30}
                      height={30}
                      alt={"color_image_" + key}
                      src={"/" + c}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Модель: </h3>
            <div className="flex gap-2">
              {Object.keys(Model).map((key) => {
                return (
                  <button
                    key={key}
                    className={clsx(
                      model == Model[key as keyof typeof Model] &&
                        "border-orange-400",
                      "border bg-transparent rounded p-2 hover:bg-muted duration-200 ",
                    )}
                    onClick={() =>
                      setModel(Model[key as keyof typeof Model] as Model)
                    }
                  >
                    {Model[key as keyof typeof Model]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="text-xl">
            Ціна:{" "}
            <span className="text-green-700 font-semibold">
              <span className="old-price">{product.oldPrice}$</span>
              {product.price}₴
            </span>
          </div>
          <div>
            <RequestDialog
              defaultValues={{ color: color, model: model, count: 1 }}
            >
              <button className="bg-orange-400 rounded-xl p-3 px-6 font-semibold hover:bg-orange-600 duration-200">
                Замовити зараз
              </button>
            </RequestDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
