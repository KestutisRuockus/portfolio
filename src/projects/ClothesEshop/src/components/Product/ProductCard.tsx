import React from "react";
import Button from "../../utils/Buttons";

type ProductProps = {
  products: {
    id: string;
    name: string;
    description: string;
    collection: string;
    subcategory: string;
    price: number;
    currency: string;
    sizes: string[];
    brand: string;
    material: string;
    availability: boolean;
    stock_quantity: number;
    images: string[];
    rating: number;
  }[];
};

export default function ProductCard({ products }: ProductProps) {
  console.log(products.length);
  return (
    <div className="flex flex-wrap justify-start px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[300px] mx-2 my-8 pt-2 relative group hover:border-black border-2 rounded-lg transition-all duration-500"
        >
          <div className="w-full mb-20 cursor-pointer">
            <img
              className="w-[200px] h-[300px] m-auto"
              src={product.images[0]}
              alt={product.name}
            />
            <div className="absolute right-2 top-2 border-2 border-yellow-400 rounded-full p-2">
              <span className="w-fit rounded-full mt-4 font-semibold">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="w-full m-auto mt-5 pl-[10%] py-4 absolute left-0 right-0 bottom-0 text-sm flex flex-col gap-4 bg- group-hover:bg-gray-200 group-hover:bg-opacity-80 transition-all duration-500 overflow-hidden cursor-default">
            <div className="px-2">
              <h1 className="font-bold">{product.brand}</h1>
              <h1 className="">{`${product.price} ${product.currency}`}</h1>
            </div>
            <div className="w-full px-2 group-hover:h-[5.2rem] h-0 transition-all duration-500 overflow-hidden">
              <span className="text-sm text-gray-500 line-clamp-2">
                {`Available sizes: ${product.sizes.join(", ")}`}
              </span>
              <Button text="Add To Cart" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
